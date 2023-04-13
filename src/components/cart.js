import { useEffect, useState } from "react";
import styles from "../styles/cartStyles.module.css";

import CartItem from "./cartItem";
import { fetchCartProducts } from "../actions/cartActions";


// Cart component for cart items list
function Cart(props){

    // get state from redux store
    const state = props.store.getState();
    
    // set carts item list using state
    const[cartProdList, setCartProdList] = useState(state.cart.cartProductList);

    useEffect(() => {

        const store = props.store;

        // Store subscribe will call setCartProdList when store's state changes.
        // Which in turn will re render component as we are using useState hook.
        store.subscribe(() => {
            // console.log("subscribe called", store.getState());
            setCartProdList(store.getState().cart.cartProductList);
        });


        // dispatch action to fetch cart items from localstorage on first render.
        store.dispatch(fetchCartProducts());


        // passing empty [] as dependency tracker to render component only once after 1st render
    }, []);



    // function to get total price of cart items
    function getTotalCartPrice(){

        let price = 0;

        // for each cart item increment price by qty * price
        for(let cartProduct of state.cart.cartProductList){
            price += cartProduct.product.product_price * cartProduct.qty;
        }

        return price;

    }

    return (
        <div className={styles.cartListContainer}>

            {/* Render cart items within this div */}
            <div className={styles.productList}>
                { cartProdList.map((product, index) => {

                    // Passing product store as props
                    return (<CartItem cartProduct={product} store={props.store} key={ index } />);

                }) }
            </div>

            {/* Div displaying cart total price */}
            <div className={styles.cartTotal}>
                <p>
                    Cart Total: Rs. 
                    <span>{ getTotalCartPrice() }</span>
                </p>
                <button type="button">Proceed</button>
            </div>

        </div>
    );

}


export default Cart;