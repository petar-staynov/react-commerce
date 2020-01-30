import {takeLatest, put, all, call} from 'redux-saga/effects';
import {auth, googleAuthProvider, createUserProfileDocument} from "../../firebase/firebase.utils";
import {signInSuccess, signInFailure} from "./userActions";
import UserActionTypes from "./userActionTypes";

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleAuthProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data(),
        }))

    } catch (err) {
        yield put(signInFailure(err))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();

        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data(),
        }))
    } catch (err) {
        yield put(signInFailure(err))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
    ])
}