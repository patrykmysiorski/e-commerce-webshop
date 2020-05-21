export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'

export interface Item {
    name: string,
    price: number
}

interface addToCartAction {
    type: typeof ADD_TO_CART
    payload: Item
}

interface deleteFromCart {
    type: typeof DELETE_FROM_CART
    payload: Item
}

export interface CartState {
    cart: Item[]
}

export type CartActionTypes = addToCartAction | deleteFromCart
