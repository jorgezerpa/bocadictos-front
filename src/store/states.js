export function addToCart(state, action){
    const products = state.products;
    const productId = products.findIndex(product=>product.id === action.payload.id);
    products[productId].quantity += 1;
    
    return {
        ...state,
        products: [ ...products],
    };
}

export function removeFromCart(state, action){
    const products = state.products;
    const productId = products.findIndex(product=>product.id === action.payload.id);
    products[productId].quantity = 0;

    return {
        ...state,
        products: [...products],
    }
}

export function decreaseProductQuantity(state, action){
    const products = state.products;
    const productId = products.findIndex(product=>product.id === action.payload.id);
    products[productId].quantity -= 1;
    
    return {
        ...state,
        products: [...products],
    }
}

export function increaseProductQuantity(state, action){
    const products = state.products;
    const productId = products.findIndex(product=>product.id === action.payload.id);
    products[productId].quantity += 1;
    return {
        ...state,
        products: [...products],
    }
}

export function changeManuallyProductQuantity(state, action){
    const products = state.products;
    const productIndex = products.findIndex(product=> product.id === action.payload.product.id);
    products[productIndex].quantity = action.payload.newValue;

    return {
        ...state,
        products: [...products],
    }; 
}

export function setCart(state, action){
    const products = action.payload;
    products.forEach(product => product.quantity = 0); 
    return {
        ...state,
        products: [...products],
    }; 
}






// return {
//     ...state,
//     products: [ ...state.products.map(product => {
//         if(product.id === action.payload.id){
//             product.quantity += 1;
//             return product
//         };
//         return product;
//     }) ]
// }
