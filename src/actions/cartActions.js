
export const FETCH_CART_ITEMS = "FETCH_CART_ITEMS";
export const ADD_TO_CART = "ADD_TO_CART";
export const INC_QTY = "INC_QTY";
export const DECR_QTY = "DECR_QTY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export function fetchCartProducts(){
    return {
        type: FETCH_CART_ITEMS
    };
}

export function addProductToCart(product){
    return {
        type: ADD_TO_CART,
        product
    };
}

export function incrementQuantity(cartProduct){
    return {
        type: INC_QTY,
        cartProduct
    };
}

export function decrementQuantity(cartProduct){
    return {
        type: DECR_QTY,
        cartProduct
    };
}

export function removeFromCart(cartProduct){
    return {
        type: REMOVE_FROM_CART,
        cartProduct
    };
}
