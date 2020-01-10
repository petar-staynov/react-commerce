import {createStore, applyMiddleware, compose} from "redux";
import logger from 'redux-logger'
import rootReducer from "./rootReducer";
import {persistStore} from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = []; //insert logger here

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export default {store, persistor};