import {
    ProductsState,
    ProductActionTypes,
    ADD_PRODUCT,
} from '../types/productsTypes'

const initialState: ProductsState = {
    products: []
}

const productsReducer = (
    state = initialState,
    action: ProductActionTypes
): ProductsState => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload]
            }
        // case DELETE_FROM_CART:
        //     return {
        //         cart: state.messages.filter(
        //             // TODO
        //         )
        //     }
        default:
            return state
    }
}

export default productsReducer;
