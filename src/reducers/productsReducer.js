import { ADD_NEW_PRODUCT, ADD_PRODUCTS, DELETE_PRODUCT, SORT_PRODUCT_LIST, UPDATE_PRODUCT } from "../actions/productActions";


export const initialProductState = {
    productList: [],
    pageLoading: true
};

export function productReducer(state=initialProductState, action){

    switch(action.type){

        case ADD_PRODUCTS: {

            return {
                ...state,
                productList: action.prodList
            };

        }

        case SORT_PRODUCT_LIST: {

            state.productList.sort((p1, p2) => p1.product_price - p2.product_price);

            return {
                ...state,
                productList: state.productList
            };

        }

        case ADD_NEW_PRODUCT: {

            if(action.newProduct){
                return {
                    ...state,
                    productList: [action.newProduct, ...state.productList]
                };
            }
            
            return state;

        }

        case UPDATE_PRODUCT: {

            if(action.updatedProduct){

                const updatedProductList = state.productList.map((product) => {

                    if(product.id === action.updatedProduct.id){

                        let newUpdatedProduct = product;

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

                        return newUpdatedProduct;
                    }

                    return product;

                });

                return {
                    ...state,
                    productList: updatedProductList
                };
            }
            
            return state;

        }

        case DELETE_PRODUCT: {

            if(action.id){

                const updatedProductList = state.productList.filter((product) => {

                    return product.id !== action.id;

                });

                return {
                    ...state,
                    productList: updatedProductList
                };
            }
            
            return state;

        }

        default: return state;
    }

}