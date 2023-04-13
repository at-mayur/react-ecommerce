import { useNotification } from "use-toast-notification";

import { useLocation } from "react-router-dom";
import styles from "../styles/productDetailsStyles.module.css";
import { addProductToCart } from "../actions/cartActions";


// Product Details Component
function ProductDetails(props){

    // useLocation hook to get data passed with link
    const location = useLocation();

    // get product passed with link.
    const {product} = location.state; 

    // initiating useNotification to display notification
    const notification = useNotification();


    // Event handler to add product to cart
    const handleAddCart = () => {

        // dispatch an action to add product to cart
        props.store.dispatch(addProductToCart(product));


        // display notification of successful addition
        notification.show({
            message: "Product added to cart successfully. Please wait for few seconds to reflect changes...",
            title: "Product addition to Cart",
            variant: "success"
        });
    };


    return (
        <div className={styles.ProductDetailsContainer}>
            <div className={styles.productBasicDetails}>

                {/* Product image */}
                <div className={styles.itemImgContainer}>
                    <img src={ product.product_image } alt={ product.product_name } />
                </div>

                <div className={styles.itemDescContainer}>

                    {/* Product Name */}
                    <h1>
                        { product.product_name }
                    </h1>


                    {/* Product Price */}
                    <div className={styles.itemPriceRating}>
                        <p className={styles.itemPrice}>
                            Price: 
                            <span>{ product.product_price }</span>
                        </p>
                    </div>


                    {/* Product Rating */}
                    <div>
                        <p className={styles.itemRating}>
                            <span className={styles.itemRatingStar}><i className="fa-solid fa-star"></i></span>
                            <span>{ product.product_rating }</span>
                        </p>
                    </div>


                    {/* Add To Cart Btn */}
                    <div className={styles.itemAddToCart}>
                        <button onClick={ handleAddCart } type="button" className={styles.addCartBtn}>Add To Cart</button>
                    </div>

                </div>

            </div>


            {/* Product Description */}
            <div className={styles.itemDesc}>
                <h2>Product Details</h2>
                <p>{ product.product_description }</p>
            </div>
        </div>
        
    );

}



export default ProductDetails;