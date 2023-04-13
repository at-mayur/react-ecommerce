import { createProductApi, deleteProductApi, getProductsApi, updateProductApi } from "../config/fetchApi";

export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const SORT_PRODUCT_LIST = "SORT_PRODUCT_LIST";
export const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";


export function addProductsList(prodList){
    return {
        type: ADD_PRODUCTS,
        prodList
    };
}

export function sortProductList(){
    return {
        type: SORT_PRODUCT_LIST
    };
}

export function addNewProductToList(newProduct){
    return {
        type: ADD_NEW_PRODUCT,
        newProduct
    };
}

export function updateProduct(updatedProduct){
    return {
        type: UPDATE_PRODUCT,
        updatedProduct
    };
}

export function deleteProduct(id){
    return {
        type: DELETE_PRODUCT,
        id
    };
}

export function getProductList(){
    return async function(dispatch){

        const response = await getProductsApi();

        if(response.success){
            dispatch(addProductsList(response.data));
            return;
        }

        alert(response.msg);
        dispatch(addProductsList([]));

    };
}

export function createNewProduct(body){
    return async function(dispatch){

        const response = await createProductApi(body);

        if(response.success){
            dispatch(addNewProductToList(response.data));
            return;
        }

        alert(response.msg);
        dispatch(addNewProductToList());

    };
}

export function updateProductData(id, body){
    return async function(dispatch){

        const response = await updateProductApi(id, body);

        if(response.success){
            dispatch(updateProduct(response.data));
            return;
        }

        alert(response.msg);
        dispatch(updateProduct());

    };
}

export function deleteProductFromList(id){
    return async function(dispatch){

        const response = await deleteProductApi(id);

        if(response.success){
            dispatch(deleteProduct(id));
            return;
        }

        alert(response.msg);
        dispatch(deleteProduct());

    };
}