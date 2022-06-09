import { ADD_PRODUCT, REMOVE_PRODUCT,DECREASE_PRODUCT_QUANTITY, INCREASE_PRODUCT_QUANTITY, CHANGE_MANUALLY_PRODUCT_QUANTITY } from './ActionTypes';

export const addProduct = (product) => ({ type: ADD_PRODUCT, payload: product }); 
export const removeProduct = (product) => ({ type: REMOVE_PRODUCT, payload: product }); 
export const decreaseQuantity = (product) => ({ type: DECREASE_PRODUCT_QUANTITY, payload: product });
export const increaseQuantity = (product) => ({ type: INCREASE_PRODUCT_QUANTITY, payload: product });
export const manualQuantityChange = (product, newValue) => ({ type: CHANGE_MANUALLY_PRODUCT_QUANTITY, payload: { product, newValue }})

