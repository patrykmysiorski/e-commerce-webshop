import { Product } from "./productsTypes";

export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'

interface addToCartAction {
    type: typeof ADD_TO_CART
    payload: Product
}

interface deleteFromCart {
    type: typeof DELETE_FROM_CART
    payload: Product
}

export interface CartState {
    cart: Product[]
}

export type CartActionTypes = addToCartAction | deleteFromCart
