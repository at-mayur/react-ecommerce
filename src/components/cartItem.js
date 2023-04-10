import styles from "../styles/cartItemStyles.module.css";


function CartItem(){

    return (
        <div className={styles.cartItemContainer}>

            <div className={styles.itemImgContainer}>
                <img src="https://images.unsplash.com/photo-1635858076951-64897a9fb2e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="Red Sofa" />
            </div>

            <div className={styles.itemDescContainer}>

                <h1>
                    "Red Sofa"
                </h1>

                <div className={styles.itemQty}>
                    Qty:
                    <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="Inc" />
                    <span>1</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="Decr" />
                </div>

                <div>
                    <p className={styles.itemPrice}>
                        Price: 
                        <span>3999</span>
                    </p>
                </div>

                <div className={styles.itemRemove}>
                    <button type="button" className={styles.removeBtn}>Remove</button>
                </div>

            </div>

        </div>
    );

}



export default CartItem;