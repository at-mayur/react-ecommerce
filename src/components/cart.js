import styles from "../styles/cartStyles.module.css";

import CartItem from "./cartItem";

function Cart(){

    return (
        <div className={styles.cartListContainer}>

            <div className={styles.productList}>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>

            <div className={styles.cartTotal}>
                <p>
                    Cart Total: Rs. 
                    <span>5499</span>
                </p>
                <button type="button">Proceed</button>
            </div>

        </div>
    );

}


export default Cart;