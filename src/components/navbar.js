import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "../styles/navbarStyles.module.css";
import { fetchCartProducts } from "../actions/cartActions";


function Navbar(props){

    const [cartItemCount, setCartItemCount] = useState(props.store.getState().cart.cartProductList.length);

    useEffect(() => {

        const store = props.store;

        store.subscribe(() => {
            // console.log("subscribe called", store.getState());
            setCartItemCount(store.getState().cart.cartProductList.length);
        });

        store.dispatch(fetchCartProducts());

    }, []);


    function handleExpandNav(){

        document.getElementById("navbar-elements").classList.toggle(styles.expand);

    }

    return (
        <div className={styles.nav}>

            <Link to="/" className={styles.brand}>
                E-Commerce
            </Link>

            <button type="button" className={styles.btn} onClick={ handleExpandNav }>
                <i className="fa-solid fa-bars"></i>
            </button>

            <div id="navbar-elements" className={styles.navElements}>

                <div className={styles.navList}>
                    <Link to="/" className={styles.navItem}>
                        Products
                    </Link>
                    <Link to="/add-product" className={styles.navItem}>
                        Add Product
                    </Link>
                </div>

                <div className={styles.navList+" "+styles.rightAlign}>
                    <Link to="/cart" className={styles.navItem}>
                        <div className={styles.cart}>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <p className={styles.cartCount}>{ cartItemCount }</p>
                        </div>
                        <span className={styles.cartTitle}>Cart</span>
                    </Link>
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