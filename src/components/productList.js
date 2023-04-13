import { useEffect, useState } from "react";
import styles from "../styles/productList.module.css";

import ProductItem from "./productItem";
import { getProductList } from "../actions/productActions";

import Loader from "./loader";

function ProductList(props){

    const state = props.store.getState();
    
    // initiate products list
    const[productList, setProductList] = useState(state.products.productList);

    // initiate sorted and loading with false
    const [sorted, setSorted] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const store = props.store;


        // Store subscribe will call setProductList when store's state changes.
        // Which in turn will re render component as we are using useState hook.
        store.subscribe(() => {
            setProductList(store.getState().products.productList);

            // after updating products list set loading false again.
            setLoading(false);
        });


        // if products list empty
        if(store.getState().products.productList.length===0){

            // dispatch action to fetch product items from API on first render.
            store.dispatch(getProductList());

            // Set loading as true
            setLoading(true);
        }

    }, []);


    // click event handler to sort list by price
    function handleSortByPrice(){

        // if already sorted then return
        if(sorted){
            return;
        }
        
        const prodList = [...productList];

        // sort list
        prodList.sort((p1, p2) => p1.product_price - p2.product_price);

        // update products list
        setProductList(prodList);
        

        // set sorted true
        setSorted(!sorted);

        // display cross to cancel sort
        document.getElementById("product-list-sort").classList.add(styles.active);

    }


    // click event handler to cancel sort by price
    function handleRemoveSortByPrice(event){

        // stop event propagation to prevent click of parent
        event.stopPropagation();
        
        const store = props.store.getState();

        const prodList = store.products.productList;

        // Update product lists with list from redux store again.
        setProductList(prodList);

        
        // set sorted false
        setSorted(!sorted);

        // remove cross mark
        document.getElementById("product-list-sort").classList.remove(styles.active);

    }

    return (
        <div className={styles.productListContainer}>


            {
                // if loading then display loader otherwise display products
                loading ? 
                ( <Loader /> ) : 
                (

                    <>
                        <div className={styles.productListSort}>

                            {/* Sort filter */}
                            <p onClick={ handleSortByPrice }>
                                Sort By Price
                                <span id="product-list-sort" onClick={ handleRemoveSortByPrice }><i className="fa-solid fa-circle-xmark"></i></span>
                            </p>
                        </div>

                        {/* Render product items within this div */}
                        <div className={styles.productList}>
                            
                            { productList.map((product, index) => {

                                return (<ProductItem product={product} store={props.store} key={ index } />);

                            }) }

                        </div>
                    </>

                )
            }

            

        </div>
    );

}


export default ProductList;