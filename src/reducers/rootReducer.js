import { cartReducer, initialCartState } from "./cartReducer";
import { initialProductState, productReducer } from "./productsReducer";


// create initial root state by combining initial states of cart and products
const initialState = {
    products: initialProductState,
    cart: initialCartState
};


// Root reducer which combines both reducers
export default function rootReducer(state=initialState, action){

    // passing respective states to reducers
    return {
        products: productReducer(state.products, action),
        cart: cartReducer(state.cart, action)
    }

}