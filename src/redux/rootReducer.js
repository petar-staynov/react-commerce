import {combineReducers} from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "./categories/categoriesReducer";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    categories: categoriesReducer,
});

export default persistReducer(persistConfig, rootReducer);