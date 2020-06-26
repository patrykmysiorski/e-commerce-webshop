import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import cartReducer from './cartReducer'
import productsReducer from './productsReducer'

export const rootReducer = combineReducers({
    form: formReducer,
    cartReducer,
    productsReducer
});

export type RootState = ReturnType<typeof rootReducer>
