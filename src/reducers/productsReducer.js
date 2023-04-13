// reducer for all product related actions


// importing action types for product
import { ADD_NEW_PRODUCT, ADD_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT } from "../actions/productActions";


// initial state for products
export const initialProductState = {
    productList: [],
};


// products reducer function
export function productReducer(state=initialProductState, action){

    switch(action.type){


        // action to update state after fetching products from API
        case ADD_PRODUCTS: {

            // return updated state
            return {
                ...state,
                productList: action.prodList
            };

        }


        // action to update state after creating new product
        case ADD_NEW_PRODUCT: {

            // if action has newProduct
            if(action.newProduct){

                // then update state and return
                return {
                    ...state,
                    productList: [action.newProduct, ...state.productList]
                };
            }
            

            // otherwise return old state
            return state;

        }


        // action to update state after updating product details
        case UPDATE_PRODUCT: {

            // if action has updatedProduct
            if(action.updatedProduct){

                // create updated list of products
                const updatedProductList = state.productList.map((product) => {

                    // if ids of both products match
                    if(product.id === action.updatedProduct.id){

                        let newUpdatedProduct = product;

                        // updated the detail which has been updated
                        if(action.updatedProduct.product_name){
                            newUpdatedProduct.product_name = action.updatedProduct.product_name;
                        }
                        if(action.updatedProduct.product_description){
                            newUpdatedProduct.product_description = action.updatedProduct.product_description;
                        }
                        if(action.updatedProduct.product_name){
                            newUpdatedProduct.product_price = action.updatedProduct.product_price;
                        }
                        if(action.updatedProduct.product_name){
                            newUpdatedProduct.product_rating = action.updatedProduct.product_rating;
                        }

                        // return updated product
                        return newUpdatedProduct;
                    }


                    // otherwise return same old product
                    return product;

                });


                // return updated state
                return {
                    ...state,
                    productList: updatedProductList
                };
            }
            
            return state;

        }


        // action to update state after deleting a product
        case DELETE_PRODUCT: {

            // if action has id
            if(action.id){

                // create updated list by filtering out deleted element
                const updatedProductList = state.productList.filter((product) => {

                    return product.id !== action.id;

                });


                // return updated state
                return {
                    ...state,
                    productList: updatedProductList
                };
            }
            
            return state;

        }


        // default action to return same old state
        default: return state;
    }

}