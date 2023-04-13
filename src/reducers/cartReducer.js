import { ADD_TO_CART, DECR_QTY, FETCH_CART_ITEMS, INC_QTY, REMOVE_FROM_CART } from "../actions/cartActions";


export const initialCartState = {
    cartProductList: []
};

export function cartReducer(state=initialCartState, action){

    switch(action.type){

        case FETCH_CART_ITEMS: {

            const cartItemsString = localStorage.getItem("ecommerce_cart");

            if(cartItemsString){
                const cartItems = JSON.parse(cartItemsString);
                return{
                    ...state,
                    cartProductList: cartItems
                };
            }

            return state;

        }

        case ADD_TO_CART: {
            let cartProductList = state.cartProductList;

            for(let prod of cartProductList){
                if(prod.product.id===action.product.id){
                    alert("Product already added to Cart...")
                    return state;
                }
            }

            cartProductList.push({product: action.product, qty: 1});
            const cartItemsString = JSON.stringify(cartProductList);
            localStorage.setItem("ecommerce_cart", cartItemsString);
            return {
                ...state,
                cartProductList
            };
        }

        case INC_QTY: {
            let cartProductList = state.cartProductList.map((prod) => {
                if(prod.product.id===action.cartProduct.product.id){
                    let qty = prod.qty + 1;
                    return {
                        ...prod,
                        qty
                    }
                }

                return prod;
            });

            const cartItemsString = JSON.stringify(cartProductList);
            localStorage.setItem("ecommerce_cart", cartItemsString);
            return {
                ...state,
                cartProductList
            };

        }

        case DECR_QTY: {
            let cartProductList = state.cartProductList.map((prod) => {
                if(prod.product.id===action.cartProduct.product.id){

                    if(prod.qty<=1){
                        return prod;
                    }

                    let qty = prod.qty - 1;
                    return {
                        ...prod,
                        qty
                    }
                }

                return prod;
            });

            const cartItemsString = JSON.stringify(cartProductList);
            localStorage.setItem("ecommerce_cart", cartItemsString);
            return {
                ...state,
                cartProductList
            };

        }

        case REMOVE_FROM_CART: {
            let cartProductList = state.cartProductList.filter((prod) => {
                return prod.product.id!==action.cartProduct.product.id
            });

            const cartItemsString = JSON.stringify(cartProductList);
            localStorage.setItem("ecommerce_cart", cartItemsString);

            return {
                ...state,
                cartProductList
            };

        }

        default: return state;
    }

}