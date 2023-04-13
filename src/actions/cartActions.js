// Action creators for Cart related actions


// Action types
export const FETCH_CART_ITEMS = "FETCH_CART_ITEMS";
export const ADD_TO_CART = "ADD_TO_CART";
export const INC_QTY = "INC_QTY";
export const DECR_QTY = "DECR_QTY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";


// Action creators for Cart related actions

// action creator for fetching cart products from localStorage
export function fetchCartProducts(){
    return {
        type: FETCH_CART_ITEMS
    };
}


// action creator for adding a product to cart
export function addProductToCart(product){
    return {
        type: ADD_TO_CART,
        product
    };
}


// action creator for incrementing a product quantity in cart
export function incrementQuantity(cartProduct){
    return {
        type: INC_QTY,
        cartProduct
    };
}


// action creator for decrementing a product quantity in cart
export function decrementQuantity(cartProduct){
    return {
        type: DECR_QTY,
        cartProduct
    };
}


// action creator for removing a product from in cart
export function removeFromCart(cartProduct){
    return {
        type: REMOVE_FROM_CART,
        cartProduct
    };
}
