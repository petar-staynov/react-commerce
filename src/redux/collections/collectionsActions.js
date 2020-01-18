import ShopActionTypes from "./collectionsActionTypes";

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
});

export const fetchCollectionsFail = error => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: error,
});