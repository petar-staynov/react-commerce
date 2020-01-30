import {takeLatest, put, all, call} from 'redux-saga/effects';
import {auth, googleAuthProvider, createUserProfileDocument, getCurrentUser} from "../../firebase/firebase.utils";
import {signInSuccess, signInFailure} from "./userActions";
import UserActionTypes from "./userActionTypes";


export function* getUserSnapshotFromAuth(userAuth) {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
    }))
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleAuthProvider);
        yield getUserSnapshotFromAuth(user);

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
        yield getUserSnapshotFromAuth(user);

    } catch (err) {
        yield put(signInFailure(err))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;

        yield getUserSnapshotFromAuth(userAuth);
    } catch (e) {
        yield put(signInFailure(e))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
    ])
}