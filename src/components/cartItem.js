import { useNotification } from "use-toast-notification";

import { decrementQuantity, incrementQuantity, removeFromCart } from "../actions/cartActions";
import styles from "../styles/cartItemStyles.module.css";

import boxImg from "../images/box.png";

// Individual cart Item component
function CartItem(props){

    // initiating useNotification to display notification
    const notification = useNotification();


    // handler to increase cart product qty
    function handleIncQty(){
        
        // dispatch action to inc cart product qty
        props.store.dispatch(incrementQuantity(props.cartProduct));

    }

    // handler to decrease cart product qty
    function handleDecrQty(){
        
        // dispatch action to decr cart product qty
        props.store.dispatch(decrementQuantity(props.cartProduct));

    }


    // Function to handle remove from cart
    function handleRemoveFromCart(){

        // dispatch action to remove a product from cart
        props.store.dispatch(removeFromCart(props.cartProduct));

        // display notification of successful removal
        notification.show({
            message: "Product removed from cart successfully. Please wait for few seconds to reflect changes...",
            title: "Product deletion form Cart",
            variant: "success"
        });

    }

    return (
        <div className={styles.cartItemContainer}>

            {/* Product Image */}
            <div className={styles.itemImgContainer}>
                <img src={ props.cartProduct.product.product_image ? props.cartProduct.product.product_image : boxImg } alt={ props.cartProduct.product.product_name } />
            </div>

            <div className={styles.itemDescContainer}>

                {/* Product Name */}
                <h1>
                    { props.cartProduct.product.product_name }
                </h1>


                {/* Product Quantity */}
                <div className={styles.itemQty}>
                    Qty:
                    <img onClick={ handleIncQty } src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="Inc" />
                    <span>{ props.cartProduct.qty }</span>
                    <img onClick={ handleDecrQty } src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="Decr" />
                </div>


                {/* Product Price */}
                <div>
                    <p className={styles.itemPrice}>
                        Price: 
                        <span>{ props.cartProduct.product.product_price }</span>
                    </p>
                </div>


                {/* Remove btn */}
                <div className={styles.itemRemove}>
                    <button onClick={ handleRemoveFromCart } type="button" className={styles.removeBtn}>Remove</button>
                </div>

            </div>

        </div>
    );

}



export default CartItem;