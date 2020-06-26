import { ADD_PRODUCT, DELETE_PRODUCT, Product, ProductActionTypes } from '../types/productsTypes'

export function addProduct(product: Product): ProductActionTypes {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export function deleteProduct(id: number): ProductActionTypes {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}
