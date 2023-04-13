import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotification } from "use-toast-notification";

import styles from "../styles/productItemStyles.module.css";
import { addProductToCart } from "../actions/cartActions";
import { deleteProductFromList, updateProductData } from "../actions/productActions";

import boxImg from "../images/box.png";



function ProductItem(props){

    const notification = useNotification();

    const [edit, setEdit] = useState(false);

    function handleEdit(event){
        event.stopPropagation();
        setEdit(!edit);
    }

    function handleEventPropagation(event){
        event.stopPropagation();
    }

    const navigate = useNavigate();

    const openProductDetailPage = () => {
        if(edit){
            return;
        }
        navigate("/product-details", {state: { product: props.product }});
    };

    const handleAddCart = (event) => {
        event.stopPropagation();

        props.store.dispatch(addProductToCart(props.product));

        notification.show({
            message: "Product added to cart successfully. Please wait for few seconds to reflect changes...",
            title: "Product addition to Cart",
            variant: "success"
        });
    };

    const handleUpdateProduct = (event) => {
        event.stopPropagation();

        if(props.product.id>7){
            alert("API creates new products with id 8.\nUpdate request for ID > 7 may error out.\nHence, disabling update for newly created product.");
            return;
        }

        let productName = document.getElementById(`item-title-${props.product.id}`).value;
        let productPrice = document.getElementById(`item-price-${props.product.id}`).value;
        let productRating = document.getElementById(`item-rating-${props.product.id}`).value;
        let productDesc = document.getElementById(`item-desc-${props.product.id}`).value;

        if(!productName || !productPrice || !productRating){
            alert("Product's Name, Price & Rating are mandatory...!!");
            return;
        }

        if(productRating<1 && productRating>5){
            alert("Product rating should be between 1 to 5");
            return;
        }

        if(productPrice<0){
            alert("Product price cannot be negative");
            return;
        }

        let body = {
            "product_name": productName,
            "product_description": productDesc,
            "product_price": productPrice,
            "product_rating": productRating
        };

        props.store.dispatch(updateProductData(props.product.id, body));

        setEdit(false);

        notification.show({
            message: "Product Updated successfully. Please wait for few seconds to reflect changes...",
            title: "Product updation",
            variant: "success"
        });
    };


    const handleDeleteProduct = (event) => {
        event.stopPropagation();

        if(props.product.id>7){
            alert("API creates new products with id 8.\nHence, deleting a single newly created product will error out.\nHence, disabling deletion for newly created product.");
            return;
        }

        props.store.dispatch(deleteProductFromList(props.product.id));
        notification.show({
            message: "Product deleted successfully. Please wait for few seconds to reflect changes...",
            title: "Product deletion",
            variant: "success"
        });
    };

    return (
        <div onClick={ openProductDetailPage } className={styles.itemContainer}>

            <div className={styles.itemImgContainer}>
                <img src={ props.product.product_image ? props.product.product_image : boxImg } alt={ props.product.product_name } />
            </div>

            <div className={styles.itemDescContainer}>

                { edit ? 
                    (<input onClick={ handleEventPropagation } type="text" id={ "item-title-" + props.product.id } defaultValue={ props.product.product_name } className={styles.prodTitleInput} />) :
                    (<h1>{ props.product.product_name }</h1>)
                }

                <div className={styles.itemPriceRating}>
                    <p className={styles.itemPrice}>
                        Price: 
                        { edit ? 
                            (<input onClick={ handleEventPropagation } type="number" id={"item-price-" +  + props.product.id} defaultValue={ props.product.product_price } />) :
                            (<span>{ props.product.product_price }</span>)
                        }
                    </p>
                    <p className={styles.itemRating}>
                        <span className={styles.itemRatingStar}><i className="fa-solid fa-star"></i></span>
                        { edit ? 
                            (<input onClick={ handleEventPropagation } type="number" id={"item-rating-" + props.product.id} defaultValue={ props.product.product_rating } />) :
                            (<span>{ props.product.product_rating }</span>)
                        }
                    </p>
                </div>

                <div className={ styles.itemDescBtnContainer }>
                    <p className={styles.itemDesc}>
                        { edit ? 
                            (<textarea onClick={ handleEventPropagation } id={"item-desc-" + props.product.id} rows={4} defaultValue={ props.product.product_description }></textarea>) :
                            (`${ props.product.product_description }`)
                        }
                    </p>
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