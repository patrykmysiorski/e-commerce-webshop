import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { cartReducer } from './cartReducer'

export const rootReducer = combineReducers({
    form: formReducer,
    cartReducer
});

export type RootState = ReturnType<typeof rootReducer>
