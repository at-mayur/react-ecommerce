import styles from "../styles/addProductStyles.module.css";

function AddProduct(){

    return (
        <div className={styles.addProductContainer}>

            <h1>Add Product</h1>

            <form className={styles.addProductForm}>
                
                <input type="text" placeholder="Product Name..." />

                <textarea rows={5} placeholder="Product Description..."></textarea>

                <input type="number" min={0} placeholder="Product Price..." />

                <input type="number" min={1} max={5} placeholder="Product Rating Out Of 5..." />

                <input type="text" placeholder="Product Image Source..." />

                <button type="submit">Add Product</button>

            </form>

        </div>
    );

}


export default AddProduct;