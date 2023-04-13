import { useNotification } from "use-toast-notification";

import { useLocation } from "react-router-dom";
import styles from "../styles/productDetailsStyles.module.css";
import { addProductToCart } from "../actions/cartActions";


function ProductDetails(props){

    const location = useLocation();
    const {product} = location.state; 

    const notification = useNotification();

    const handleAddCart = () => {

        props.store.dispatch(addProductToCart(product));

        notification.show({
            message: "Product added to cart successfully. Please wait for few seconds to reflect changes...",
            title: "Product addition to Cart",
            variant: "success"
        });
    };

    return (
        <div className={styles.ProductDetailsContainer}>
            <div className={styles.productBasicDetails}>

                <div className={styles.itemImgContainer}>
                    <img src={ product.product_image } alt={ product.product_name } />
                </div>

                <div className={styles.itemDescContainer}>

                    <h1>
                        { product.product_name }
                    </h1>

                    <div className={styles.itemPriceRating}>
                        <p className={styles.itemPrice}>
                            Price: 
                            <span>{ product.product_price }</span>
                        </p>
                    </div>

                    <div>
                        <p className={styles.itemRating}>
                            <span className={styles.itemRatingStar}><i className="fa-solid fa-star"></i></span>
                            <span>{ product.product_rating }</span>
                        </p>
                    </div>

                    <div className={styles.itemAddToCart}>
                        <button onClick={ handleAddCart } type="button" className={styles.addCartBtn}>Add To Cart</button>
                    </div>

                </div>

            </div>

            <div className={styles.itemDesc}>
                <h2>Product Details</h2>
                <p>{ product.product_description }</p>
            </div>
        </div>
        
    );

}



export default ProductDetails;