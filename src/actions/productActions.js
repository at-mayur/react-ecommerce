// Action creators for product related actions

// Api actions
import { createProductApi, deleteProductApi, getProductsApi, updateProductApi } from "../config/fetchApi";

// Action types
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const SORT_PRODUCT_LIST = "SORT_PRODUCT_LIST";
export const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

// Action creators for Cart related actions


// action creator for adding a product list fetched from api to state.
export function addProductsList(prodList){
    return {
        type: ADD_PRODUCTS,
        prodList
    };
}


// action creator for adding a newly created product to a product list.
export function addNewProductToList(newProduct){
    return {
        type: ADD_NEW_PRODUCT,
        newProduct
    };
}


// action creator for updating a product details in a product list.
export function updateProduct(updatedProduct){
    return {
        type: UPDATE_PRODUCT,
        updatedProduct
    };
}


// action creator for deleting a product from a product list.
export function deleteProduct(id){
    return {
        type: DELETE_PRODUCT,
        id
    };
}


// async action creator for getting a product list from API.
export function getProductList(){
    // return a function which will receive dispatch func from thunk middleware.
    return async function(dispatch){

        // make a call to api to get all products list
        const response = await getProductsApi();

        // if response is successful then call dispatch by passing product list received as response.
        if(response.success){
            dispatch(addProductsList(response.data));
            return;
        }

        // Otherwise alert error msg received and call dispatch with empty list
        alert(response.msg);
        dispatch(addProductsList([]));

    };
}


// async action creator for creating a new product by calling API.
export function createNewProduct(body){

    // return a function which will receive dispatch func from thunk middleware.
    return async function(dispatch){

        // make a call to api to create a new product
        const response = await createProductApi(body);

        // if response is successful then update state by dispatching another action.
        if(response.success){
            dispatch(addNewProductToList(response.data));
            return;
        }

        // Otherwise alert error msg and call dispatch without passing any data
        alert(response.msg);
        dispatch(addNewProductToList());

    };
}


// async action creator for updating a product details by calling API.
export function updateProductData(id, body){

    // return a function which will receive dispatch func from thunk middleware.
    return async function(dispatch){

        // make a call to api to update a product details
        const response = await updateProductApi(id, body);

        // if response is successful then update state by dispatching another action.
        if(response.success){
            dispatch(updateProduct(response.data));
            return;
        }

        // Otherwise alert error msg and call dispatch without passing any data
        alert(response.msg);
        dispatch(updateProduct());

    };
}


// async action creator for deleting a product by calling API.
export function deleteProductFromList(id){

    // return a function which will receive dispatch func from thunk middleware.
    return async function(dispatch){

        // make a call to api to delete a product
        const response = await deleteProductApi(id);

        // if response is successful then update state by dispatching another action.
        if(response.success){
            dispatch(deleteProduct(id));
            return;
        }

        // Otherwise alert error msg and call dispatch without passing any data
        alert(response.msg);
        dispatch(deleteProduct());

    };
}