import { Item, ADD_TO_CART, DELETE_FROM_CART, CartActionTypes } from '../types/cartTypes'

export function addToCart(item: Item): CartActionTypes {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export function deleteMessage(item: Item): CartActionTypes {
    return {
        type: DELETE_FROM_CART,
        payload: item
    }
}
