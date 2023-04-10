import styles from "../styles/productDetailsStyles.module.css";


function ProductDetails(){

    return (
        <div className={styles.ProductDetailsContainer}>
            <div className={styles.productBasicDetails}>

                <div className={styles.itemImgContainer}>
                    <img src="https://images.unsplash.com/photo-1635858076951-64897a9fb2e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="Red Sofa" />
                </div>

                <div className={styles.itemDescContainer}>

                    <h1>
                        Red Sofa
                    </h1>

                    <div className={styles.itemPriceRating}>
                        <p className={styles.itemPrice}>
                            Price: 
                            <span>3999</span>
                        </p>
                    </div>

                    <div>
                        <p className={styles.itemRating}>
                            <span className={styles.itemRatingStar}><i className="fa-solid fa-star"></i></span>
                            <span>4</span>
                        </p>
                    </div>

                    <div className={styles.itemAddToCart}>
                        <button type="button" className={styles.addCartBtn}>Add To Cart</button>
                    </div>

                </div>

            </div>

            <div className={styles.itemDesc}>
                <h2>Product Details</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged.
                </p>
            </div>
        </div>
        
    );

}



export default ProductDetails;