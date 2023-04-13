import { useEffect, useState } from "react";
import styles from "../styles/cartStyles.module.css";

import CartItem from "./cartItem";
import { fetchCartProducts } from "../actions/cartActions";

function Cart(props){

    const state = props.store.getState();
    
    const[cartProdList, setCartProdList] = useState(state.cart.cartProductList);

    useEffect(() => {

        const store = props.store;

        store.subscribe(() => {
            // console.log("subscribe called", store.getState());
            setCartProdList(store.getState().cart.cartProductList);
        });

        store.dispatch(fetchCartProducts());

    }, []);

    function getTotalCartPrice(){

        let price = 0;

        for(let cartProduct of state.cart.cartProductList){
            price += cartProduct.product.product_price * cartProduct.qty;
        }

        return price;

    }

    return (
        <div className={styles.cartListContainer}>

            <div className={styles.productList}>
                { cartProdList.map((product, index) => {

                    return (<CartItem cartProduct={product} store={props.store} key={ index } />);

                }) }
            </div>

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