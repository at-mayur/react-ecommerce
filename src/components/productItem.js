import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotification } from "use-toast-notification";

import styles from "../styles/productItemStyles.module.css";
import { addProductToCart } from "../actions/cartActions";
import { deleteProductFromList, updateProductData } from "../actions/productActions";

import boxImg from "../images/box.png";


// Individual product item for products page
function ProductItem(props){

    // useLocation hook to get data passed with link
    const notification = useNotification();

    // useState to toggle edit product
    const [edit, setEdit] = useState(false);


    // function handler to enable or disable product edit
    function handleEdit(event){
        event.stopPropagation();
        setEdit(!edit);
    }


    // prevent event propagation after clicking input fields
    function handleEventPropagation(event){
        event.stopPropagation();
    }


    // create navigation
    const navigate = useNavigate();


    // click event handler for product item
    const openProductDetailPage = () => {
        // if we are editing item then do nothing
        if(edit){
            return;
        }

        // Navigate to product details page and pass product along
        navigate("/product-details", {state: { product: props.product }});
    };


    // click event handler to add product to cart
    const handleAddCart = (event) => {

        // stop event propagation to prevent opening product details page.
        event.stopPropagation();

        // dispatch an action to add product to cart
        props.store.dispatch(addProductToCart(props.product));


        // display notification of successful addition
        notification.show({
            message: "Product added to cart successfully. Please wait for few seconds to reflect changes...",
            title: "Product addition to Cart",
            variant: "success"
        });
    };


    // click event handler to update product details
    const handleUpdateProduct = (event) => {

        // stop event propagation to prevent opening product details page.
        event.stopPropagation();


        // Prevent updation for ids > 7
        if(props.product.id>7){
            alert("API creates new products with id 8.\nUpdate request for ID > 7 may error out.\nHence, disabling update for newly created product.");
            return;
        }

        // Get values of all elements
        let productName = document.getElementById(`item-title-${props.product.id}`).value;
        let productPrice = document.getElementById(`item-price-${props.product.id}`).value;
        let productRating = document.getElementById(`item-rating-${props.product.id}`).value;
        let productDesc = document.getElementById(`item-desc-${props.product.id}`).value;


        // Check if productName, productPrice, productRating have values
        if(!productName || !productPrice || !productRating){
            alert("Product's Name, Price & Rating are mandatory...!!");
            return;
        }


        // check if productRating is within limit
        if(productRating<1 && productRating>5){
            alert("Product rating should be between 1 to 5");
            return;
        }


        // check if price is not negative
        if(productPrice<0){
            alert("Product price cannot be negative");
            return;
        }


        // create a body object
        let body = {
            "product_name": productName,
            "product_description": productDesc,
            "product_price": productPrice,
            "product_rating": productRating
        };


        // dispatch action to update product details
        props.store.dispatch(updateProductData(props.product.id, body));


        // set edit field to false
        setEdit(false);


        // display notification of successful update
        notification.show({
            message: "Product Updated successfully. Please wait for few seconds to reflect changes...",
            title: "Product updation",
            variant: "success"
        });
    };




    // click event handler to update product details
    const handleDeleteProduct = (event) => {

        // stop event propagation to prevent opening product details page.
        event.stopPropagation();


        // Prevent deletion for ids > 7
        if(props.product.id>7){
            alert("API creates new products with id 8.\nHence, deleting a single newly created product will error out.\nHence, disabling deletion for newly created product.");
            return;
        }


        // dispatch action to delete a product
        props.store.dispatch(deleteProductFromList(props.product.id));

        // display notification of successful update
        notification.show({
            message: "Product deleted successfully. Please wait for few seconds to reflect changes...",
            title: "Product deletion",
            variant: "success"
        });
    };





    return (
        <div onClick={ openProductDetailPage } className={styles.itemContainer}>

            {/* Product Image
            if image is not present then display default box img */}
            <div className={styles.itemImgContainer}>
                <img src={ props.product.product_image ? props.product.product_image : boxImg } alt={ props.product.product_name } />
            </div>

            <div className={styles.itemDescContainer}>

                {/* Product Name
                if edit is true then display input field */}
                { edit ? 
                    (<input onClick={ handleEventPropagation } type="text" id={ "item-title-" + props.product.id } defaultValue={ props.product.product_name } className={styles.prodTitleInput} />) :
                    (<h1>{ props.product.product_name }</h1>)
                }

                <div className={styles.itemPriceRating}>

                    {/* Product Price
                    if edit is true then display input field */}
                    <p className={styles.itemPrice}>
                        Price: 
                        { edit ? 
                            (<input onClick={ handleEventPropagation } type="number" id={"item-price-" +  + props.product.id} defaultValue={ props.product.product_price } />) :
                            (<span>{ props.product.product_price }</span>)
                        }
                    </p>

                    {/* Product Rating
                    if edit is true then display input field */}
                    <p className={styles.itemRating}>
                        <span className={styles.itemRatingStar}><i className="fa-solid fa-star"></i></span>
                        { edit ? 
                            (<input onClick={ handleEventPropagation } type="number" id={"item-rating-" + props.product.id} defaultValue={ props.product.product_rating } />) :
                            (<span>{ props.product.product_rating }</span>)
                        }
                    </p>
                </div>

                <div className={ styles.itemDescBtnContainer }>

                    {/* Product Description
                    if edit is true then display textarea field */}
                    <p className={styles.itemDesc}>
                        { edit ? 
                            (<textarea onClick={ handleEventPropagation } id={"item-desc-" + props.product.id} rows={4} defaultValue={ props.product.product_description }></textarea>) :
                            (`${ props.product.product_description }`)
                        }
                    </p>

                    {/* Action btns
                    if edit is true then display cancel & save btns
                    if edit is false then display add to cart, edit and delete btns */}
                    <div className={styles.itemEditDelete}>
                        { edit ? 
                            (<>
                                <button type="button" className={styles.cancelBtn} onClick={ handleEdit }>Cancel</button>
                                <button type="button" className={styles.saveBtn} onClick={ handleUpdateProduct }>Save</button>
                            </>) :
                            (<>
                                <button type="button" className={styles.addCartBtn} onClick={ handleAddCart }>Add To Cart</button>
                                <img onClick={ handleEdit } src="https://cdn-icons-png.flaticon.com/512/2280/2280532.png" alt="Edit" />
                                <img onClick={ handleDeleteProduct } src="https://cdn-icons-png.flaticon.com/512/6460/6460112.png" alt="Delete" />
                            </>)
                        }
                    </div>
                </div>

            </div>

        </div>
    );

}



export default ProductItem;