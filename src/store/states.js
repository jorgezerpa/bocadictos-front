export function addToCart(state, action){
    const product = action.payload;
    product.quantity += 1;    
    return {
        ...state,
        products: [ ...state.products, product],
    };
}

export function removeFromCart(state, action){
    const index = state.products.findIndex(product=>product.id === action.payload.id );
    if(index === -1 ) return {...state};
    state.products[index].quantity = 0; //cause if I add the product again, it preserves the old quantity
    return {
        ...state,
        products: [...state.products.filter(product=>product.id !== action.payload.id)],
        removedElementId: action.payload.id,
    }
}

export function decreaseProductQuantity(state, action){
    const productIndex = state.products.findIndex(product=> product.id === action.payload.id);
    if(productIndex === -1 ) return {...state};
    if(state.products[productIndex].quantity - 1 === 0) return removeFromCart(state, action);
    else state.products[productIndex].quantity -= 1;    
    return {
        ...state,
    }
}

export function increaseProductQuantity(state, action){
    const products = state.products;
    const productIndex = products.findIndex(product=> product.id === action.payload.id);
    if(productIndex === -1 ) return {...state};
    products[productIndex].quantity += 1;

    return {
        ...state,
        products: products,
    };
}

export function changeManuallyProductQuantity(state, action){
    const products = state.products;
    const productIndex = products.findIndex(product=> product.id === action.payload.product.id);
    if(productIndex === -1 ) return {...state};
    products[productIndex].quantity = action.payload.newValue;

    return {
        ...state,
        products: products,
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
