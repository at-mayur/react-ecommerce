import { useNotification } from "use-toast-notification";

import { createNewProduct } from "../actions/productActions";
import styles from "../styles/addProductStyles.module.css";


function AddProduct(props){

    const notification = useNotification();

    const handleCreateProduct = (event) => {
        event.preventDefault();

        let productName = document.getElementById(`item-title-input`).value;
        let productPrice = document.getElementById(`item-price-input`).value;
        let productRating = document.getElementById(`item-rating-input`).value;
        let productDesc = document.getElementById(`item-desc-input`).value;
        let productImg = document.getElementById(`item-image-input`).value;

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
            "product_rating": productRating,
            "product_image": productImg
        };

        props.store.dispatch(createNewProduct(body));

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
                
                <input id="item-title-input" type="text" placeholder="Product Name..." />

                <textarea id="item-desc-input" rows={5} placeholder="Product Description..."></textarea>

                <input id="item-price-input" type="number" min={0} placeholder="Product Price..." />

                <input id="item-rating-input" type="number" min={1} max={5} placeholder="Product Rating Out Of 5..." />

                <input id="item-image-input" type="text" placeholder="Product Image Source..." />

                <button type="submit">Add Product</button>

            </form>

        </div>
    );

}


export default AddProduct;