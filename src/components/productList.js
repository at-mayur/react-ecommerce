import styles from "../styles/productList.module.css";

import ProductItem from "./productItem";

function ProductList(){

    return (
        <div className={styles.productListContainer}>

            <div className={styles.productListSort}>
                <p>
                    Sort By Price
                    <span><i class="fa-solid fa-circle-xmark"></i></span>
                </p>
            </div>

            <div className={styles.productList}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>

        </div>
    );

}


export default ProductList;