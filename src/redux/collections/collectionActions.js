import ShopActionTypes from "./collectionActionTypes";
import {firestore, getCollections} from "../../firebase/firebase.utils";

// export const updateCollections = collectionsMap => ({
//     type: ShopActionTypes.UPDATE_COLLECTIONS,
//     payload: collectionsMap
// });

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

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef
            .get()
            .then(data => {
                const collectionsMap = getCollections(data);
                dispatch(fetchCollectionsSuccess(collectionsMap));
            })
            .catch(e => dispatch(fetchCollectionsFail(e)));
    }
};