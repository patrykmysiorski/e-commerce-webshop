import { ADD_PRODUCT, DELETE_PRODUCT, ProductActionTypes, ProductsState, } from '../types/productsTypes'

const initialState: ProductsState = {
    products: []
}

const productsReducer = (
    state = initialState,
    action: ProductActionTypes
): ProductsState => {
    switch (action.type) {
        case ADD_PRODUCT:
            const names = state.products.map(game => game.title);
            if (!names.includes(action.payload.title)) {
                return {
                    products: [...state.products, {id: state.products.length, ...action.payload}]
                }
            } else {
                return state;
            }
        case DELETE_PRODUCT:
            return {
                products: state.products.filter(product => product.id !== action.payload)
            }
        default:
            return state
    }
}

export default productsReducer;
