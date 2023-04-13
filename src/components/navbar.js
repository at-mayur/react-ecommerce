import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "../styles/navbarStyles.module.css";
import { fetchCartProducts } from "../actions/cartActions";

// Navbar Component
function Navbar(props){

    // useState to update cart items count
    const [cartItemCount, setCartItemCount] = useState(props.store.getState().cart.cartProductList.length);

    useEffect(() => {

        const store = props.store;

        // Store subscribe will call setCartItemCount when store's state changes.
        // Which in turn will re render component as we are using useState hook.
        store.subscribe(() => {
            // console.log("subscribe called", store.getState());
            setCartItemCount(store.getState().cart.cartProductList.length);
        });

        // dispatch action to fetch cart items from localstorage on first render.
        store.dispatch(fetchCartProducts());

    }, []);


    // handler to expand collapsed navbar
    function handleExpandNav(){

        document.getElementById("navbar-elements").classList.toggle(styles.expand);

    }

    return (
        <div className={styles.nav}>

            {/* Link to Products Page */}
            <Link to="/" className={styles.brand}>
                E-Commerce
            </Link>

            {/* Btn to expand and collapse navbar on smaller screen */}
            <button type="button" className={styles.btn} onClick={ handleExpandNav }>
                <i className="fa-solid fa-bars"></i>
            </button>


            <div id="navbar-elements" className={styles.navElements}>

                <div className={styles.navList}>
                    {/* Link to Products Page */}
                    <Link to="/" className={styles.navItem}>
                        Products
                    </Link>

                    {/* Link to Add Product Page */}
                    <Link to="/add-product" className={styles.navItem}>
                        Add Product
                    </Link>
                </div>

                <div className={styles.navList+" "+styles.rightAlign}>

                    {/* Link to Cart Page */}
                    <Link to="/cart" className={styles.navItem}>
                        <div className={styles.cart}>
                            {/* Cart Icon */}
                            <i className="fa-solid fa-cart-shopping"></i>

                            {/* Cart item count */}
                            <p className={styles.cartCount}>{ cartItemCount }</p>
                        </div>
                        <span className={styles.cartTitle}>Cart</span>
                    </Link>

                    {/* User Profile */}
                    <p className={styles.navItem}>
                        <img src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png" alt="User" className={styles.img} />
                        <span>Mayur</span>
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Navbar;