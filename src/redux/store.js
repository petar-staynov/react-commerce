import {createStore, applyMiddleware, compose} from "redux";
import logger from 'redux-logger'
import rootReducer from "./rootReducer";
import {persistStore} from "redux-persist";
// import thunk from 'redux-thunk'

import createSagaMiddleware from 'redux-saga';

import {fetchCollectionsStart} from './collections/collectionsSagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]; //insert logger here

if (process.env.NODE_ENV === 'development') {
    // middlewares.push(logger)
}

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);

export default {store, persistor};