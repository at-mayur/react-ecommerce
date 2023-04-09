import styles from "../styles/navbarStyles.module.css";

function Navbar(){

    function handleExpandNav(){

        document.getElementById("navbar-elements").classList.toggle(styles.expand);

    }

    return (
        <div className={styles.nav}>

            <a href="/products" className={styles.brand}>
                E-Commerce
            </a>

            <button type="button" className={styles.btn} onClick={ handleExpandNav }>
                <i class="fa-solid fa-bars"></i>
            </button>

            <div id="navbar-elements" className={styles.navElements}>

                <div className={styles.navList}>
                    <a href="/products" className={styles.navItem}>
                        Products
                    </a>
                    <a href="/products" className={styles.navItem}>
                        Add Product
                    </a>
                </div>

                <div className={styles.navList+" "+styles.rightAlign}>
                    <a href="/products" className={styles.navItem}>
                        <div className={styles.cart}>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <p className={styles.cartCount}>2</p>
                        </div>
                        <span className={styles.cartTitle}>Cart</span>
                    </a>
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