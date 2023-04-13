import { useNotification } from "use-toast-notification";

import { createNewProduct } from "../actions/productActions";
import styles from "../styles/addProductStyles.module.css";


// Add Product component
function AddProduct(props){

    // initiating useNotification to display notification
    const notification = useNotification();


    // Event handler to handle form submit for creating a new product
    const handleCreateProduct = (event) => {
        // Prevent default submit action for form.
        event.preventDefault();

        // Get values of all elements
        let productName = document.getElementById(`item-title-input`).value;
        let productPrice = document.getElementById(`item-price-input`).value;
        let productRating = document.getElementById(`item-rating-input`).value;
        let productDesc = document.getElementById(`item-desc-input`).value;
        let productImg = document.getElementById(`item-image-input`).value;


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
            "product_rating": productRating,
            "product_image": productImg
        };


        // dispatch action to create new product
        props.store.dispatch(createNewProduct(body));


        // display notification of successful update
        notification.show({
            message: "Product added to list successfully. Please wait for few seconds to reflect changes...",
            title: "Product addition",
            variant: "success"
        });
    };


    return (
        <div className={styles.addProductContainer}>

            <h1>Add Product</h1>

            <form onSubmit={ handleCreateProduct } className={styles.addProductForm}>
                
                {/* Product name field */}
                <input id="item-title-input" type="text" placeholder="Product Name..." />

                {/* Product Description field */}
                <textarea id="item-desc-input" rows={5} placeholder="Product Description..."></textarea>

                {/* Product price field */}
                <input id="item-price-input" type="number" min={0} placeholder="Product Price..." />

                {/* Product rating field */}
                <input id="item-rating-input" type="number" min={1} max={5} placeholder="Product Rating Out Of 5..." />

                {/* Product image source field */}
                <input id="item-image-input" type="text" placeholder="Product Image Source..." />

                <button type="submit">Add Product</button>

            </form>

        </div>
    );

}


export default AddProduct;