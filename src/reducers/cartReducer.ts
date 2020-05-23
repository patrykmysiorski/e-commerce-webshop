import {
    CartState,
    CartActionTypes,
    ADD_TO_CART,
} from '../types/types'

const initialState: CartState = {
    cart: []
}

const cartReducer = (
    state = initialState,
    action: CartActionTypes
): CartState => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart: [...state.cart, action.payload]
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

export default cartReducer;
