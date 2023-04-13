// reducer for all cart related actions


// importing action types for cart
import { ADD_TO_CART, DECR_QTY, FETCH_CART_ITEMS, INC_QTY, REMOVE_FROM_CART } from "../actions/cartActions";


// initial state for cart
export const initialCartState = {
    cartProductList: []
};



// cart reducer function
export function cartReducer(state=initialCartState, action){

    switch(action.type){

        // action to fetch cart items from localstorage
        case FETCH_CART_ITEMS: {

            // get item from localstorage
            const cartItemsString = localStorage.getItem("ecommerce_cart");

            // if item is present
            if(cartItemsString){
                // convert it to Object again
                const cartItems = JSON.parse(cartItemsString);

                // return updated state
                return{
                    ...state,
                    cartProductList: cartItems
                };
            }

            // if not present within localstorage then return old state
            return state;

        }


        // action for adding product to cart
        case ADD_TO_CART: {

            // get old list
            let cartProductList = state.cartProductList;

            // look for if product already exists
            for(let prod of cartProductList){
                if(prod.product.id===action.product.id){
                    alert("Product already added to Cart...")
                    return state;
                }
            }


            // if not exists then add it to list
            cartProductList.push({product: action.product, qty: 1});

            // Update list within localstorage
            const cartItemsString = JSON.stringify(cartProductList);
            localStorage.setItem("ecommerce_cart", cartItemsString);

            // return updated state
            return {
                ...state,
                cartProductList
            };
        }


        // action to increment product quantity within cart
        case INC_QTY: {

            // get updated list with increased count of product
            let cartProductList = state.cartProductList.map((prod) => {

                // if ids of products matches
                if(prod.product.id===action.cartProduct.product.id){

                    // increase qty by 1
                    let qty = prod.qty + 1;

                    // return updated product
                    return {
                        ...prod,
                        qty
                    }
                }

                // otherwise return same product
                return prod;
            });

            // Update list within localstorage
            const cartItemsString = JSON.stringify(cartProductList);
            localStorage.setItem("ecommerce_cart", cartItemsString);

            // return updated state
            return {
                ...state,
                cartProductList
            };

        }


        // action to decrement product quantity within cart
        case DECR_QTY: {

            // get updated list with decreased count of product
            let cartProductList = state.cartProductList.map((prod) => {

                // if ids of products matches
                if(prod.product.id===action.cartProduct.product.id){

                    // if qty is <= 1 then don't update qty
                    if(prod.qty<=1){
                        return prod;
                    }

                    // decrease qty by 1
                    let qty = prod.qty - 1;
                    return {
                        ...prod,
                        qty
                    }
                }

                return prod;
            });

            // Update list within localstorage
            const cartItemsString = JSON.stringify(cartProductList);
            localStorage.setItem("ecommerce_cart", cartItemsString);

            // return updated state
            return {
                ...state,
                cartProductList
            };

        }


        // action to remove product from cart
        case REMOVE_FROM_CART: {

            // filter list by excluding deleted product
            let cartProductList = state.cartProductList.filter((prod) => {
                return prod.product.id!==action.cartProduct.product.id
            });


            // Update list within localstorage
            const cartItemsString = JSON.stringify(cartProductList);
            localStorage.setItem("ecommerce_cart", cartItemsString);


            // return updated state
            return {
                ...state,
                cartProductList
            };

        }

        default: return state;
    }

}