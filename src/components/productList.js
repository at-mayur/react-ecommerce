import { useEffect, useState } from "react";
import styles from "../styles/productList.module.css";

import ProductItem from "./productItem";
import { getProductList } from "../actions/productActions";

import Loader from "./loader";

function ProductList(props){

    const state = props.store.getState();
    
    const[productList, setProductList] = useState(state.products.productList);
    const [sorted, setSorted] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const store = props.store;

        store.subscribe(() => {
            // console.log("subscribe called", store.getState());
            setProductList(store.getState().products.productList);
            setLoading(false);
        });

        if(store.getState().products.productList.length===0){
            store.dispatch(getProductList());
            setLoading(true);
        }

    }, []);


    function handleSortByPrice(){

        if(sorted){
            return;
        }
        
        const prodList = [...productList];

        prodList.sort((p1, p2) => p1.product_price - p2.product_price);
        setProductList(prodList);
        

        setSorted(!sorted);
        document.getElementById("product-list-sort").classList.add(styles.active);

    }

    function handleRemoveSortByPrice(event){

        event.stopPropagation();
        
        const store = props.store.getState();

        const prodList = store.products.productList;

        setProductList(prodList);

        
        setSorted(!sorted);
        document.getElementById("product-list-sort").classList.remove(styles.active);

    }

    return (
        <div className={styles.productListContainer}>


            {
                loading ? 
                ( <Loader /> ) : 
                (

                    <>
                        <div className={styles.productListSort}>
                            <p onClick={ handleSortByPrice }>
                                Sort By Price
                                <span id="product-list-sort" onClick={ handleRemoveSortByPrice }><i className="fa-solid fa-circle-xmark"></i></span>
                            </p>
                        </div>

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