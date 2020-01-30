import {takeLatest, put, all, call} from 'redux-saga/effects';
import {auth, googleAuthProvider, createUserProfileDocument} from "../../firebase/firebase.utils";
import {googleSignInSuccess, googleSignInFailureg, googleSignInFailure} from "./userActions";
import UserActionTypes from "./userActionTypes";

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleAuthProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(googleSignInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data(),
        }))

    } catch (err) {
        yield put(googleSignInFailure(err))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart)
    ])
}