import {all, call} from 'redux-saga/effects'
import {fetchCollectionsStart} from "./collections/collectionsSagas";
import {userSagas} from "./user/userSagas";

export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart),
        call(userSagas),
    ])
}