import {COLLECTIONS_DATA} from "./collectionsData";
import ShopActionTypes from "./collectionActionTypes";

const INITIAL_STATE = null;

const collectionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            };
        default:
            return state;
    }
};

export default collectionsReducer;
