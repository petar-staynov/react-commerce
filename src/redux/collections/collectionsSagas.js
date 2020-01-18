import {takeEvery, call, put} from 'redux-saga/effects'
import collectionsActionTypes from './collectionsActionTypes';
import {firestore, getCollections} from "../../firebase/firebase.utils";
import {fetchCollectionsFail, fetchCollectionsSuccess} from "./collectionsActions";

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(getCollections, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (e) {
        yield put(fetchCollectionsFail(e))
    }
}

export function* fetchCollectionsStart() {
    yield takeEvery(
        collectionsActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}