import { cartReducer, initialCartState } from "./cartReducer";
import { initialProductState, productReducer } from "./productsReducer";



const initialState = {
    products: initialProductState,
    cart: initialCartState
};

export default function rootReducer(state=initialState, action){

    return {
        products: productReducer(state.products, action),
        cart: cartReducer(state.cart, action)
    }

}