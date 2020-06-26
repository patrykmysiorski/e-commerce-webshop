import { Product } from "../types/productsTypes";
import { ADD_TO_CART, CartActionTypes, DELETE_FROM_CART } from '../types/cartTypes'

export function addToCart(item: Product): CartActionTypes {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export function deleteMessage(item: Product): CartActionTypes {
    return {
        type: DELETE_FROM_CART,
        payload: item
    }
}
