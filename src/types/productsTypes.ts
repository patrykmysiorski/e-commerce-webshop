export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export interface Product {
    id: number,
    name: string,
    category: string,
    price: number,
    image: string
}

interface addProductAction {
    type: typeof ADD_PRODUCT
    payload: Product
}

interface deleteProductAction {
    type: typeof DELETE_PRODUCT
    payload: string
}

export interface ProductsState {
    products: Product[]
}

export type ProductActionTypes = addProductAction | deleteProductAction
