
// custom fetch function
async function customFetch(url, { body, config }){

    try {

        // header for request
        const headers = {
            "Content-Type": "application/json"
        };

        // configuring options for fetch.
        let configuration = {
            ...config,
            headers
        };

        // if body is present then include in configuration.
        if(body){
            // JSON.Stringify to convert object to string
            configuration.body = JSON.stringify(body);
        }

        // send request
        let response = await fetch(url, configuration);

        // get json data from response
        let data = await response.json();

        // return data
        if(response.status===200 || response.status===201){
            return {
                data,
                success: true
            };
        }
    
        return {
            success: false,
            msg: "Not Found"
        };
        
    } catch (error) {
        
        console.error(error);
        return {
            success: false,
            msg: error
        };

    }

}


// function to get products list
export function getProductsApi(){

    // url and config with method as GET
    let url = `https://my-json-server.typicode.com/at-mayur/ecommerce-fake-server/products`;
    let config = {
        method: "GET"
    };

    // get data by using above declared custom fetch
    return customFetch(url, {config});

    
}


// function to create new product
export function createProductApi(body){
    // url and config with method as POST
    let url = `https://my-json-server.typicode.com/at-mayur/ecommerce-fake-server/products`;
    let config = {
        method: "POST"
    };

    // get data by using above declared custom fetch by passing body
    return customFetch(url, {body, config});
    
}

// function to update product
export function updateProductApi(id, body){
    // url and config with method as PUT
    let url = `https://my-json-server.typicode.com/at-mayur/ecommerce-fake-server/products/${id}`;
    let config = {
        method: "PUT"
    };

    // get data by using above declared custom fetch by passing body
    return customFetch(url, {body, config});
    
}

// function to delete a product
export function deleteProductApi(id){
    // url and config with method as DELETE
    let url = `https://my-json-server.typicode.com/at-mayur/ecommerce-fake-server/products/${id}`;
    let config = {
        method: "DELETE"
    };

    // get data by using above declared custom fetch
    return customFetch(url, {config});
    
}