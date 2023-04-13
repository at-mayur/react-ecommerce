import { useNotification } from "use-toast-notification";

import { decrementQuantity, incrementQuantity, removeFromCart } from "../actions/cartActions";
import styles from "../styles/cartItemStyles.module.css";

import boxImg from "../images/box.png";


function CartItem(props){

    const notification = useNotification();

    function handleIncQty(){
        
        props.store.dispatch(incrementQuantity(props.cartProduct));

    }

    function handleDecrQty(){
        
        props.store.dispatch(decrementQuantity(props.cartProduct));

    }

    function handleRemoveFromCart(){

        props.store.dispatch(removeFromCart(props.cartProduct));

        notification.show({
            message: "Product removed from cart successfully. Please wait for few seconds to reflect changes...",
            title: "Product deletion form Cart",
            variant: "success"
        });

    }

    return (
        <div className={styles.cartItemContainer}>

            <div className={styles.itemImgContainer}>
                <img src={ props.cartProduct.product.product_image ? props.cartProduct.product.product_image : boxImg } alt={ props.cartProduct.product.product_name } />
            </div>

            <div className={styles.itemDescContainer}>

                <h1>
                    { props.cartProduct.product.product_name }
                </h1>

                <div className={styles.itemQty}>
                    Qty:
                    <img onClick={ handleIncQty } src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="Inc" />
                    <span>{ props.cartProduct.qty }</span>
                    <img onClick={ handleDecrQty } src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="Decr" />
                </div>

                <div>
                    <p className={styles.itemPrice}>
                        Price: 
                        <span>{ props.cartProduct.product.product_price }</span>
                    </p>
                </div>

                <div className={styles.itemRemove}>
                    <button onClick={ handleRemoveFromCart } type="button" className={styles.removeBtn}>Remove</button>
                </div>

            </div>

        </div>
    );

}



export default CartItem;