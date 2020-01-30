import UserActionTypes from "./userActionTypes";

export const googleSignInStart = () => (
    {
        type: UserActionTypes.GOOGLE_SIGN_IN_START,
    }
);

export const emailSignInStart = (loginParams) => (
    {
        type: UserActionTypes.EMAIL_SIGN_IN_START,
        payload: loginParams,
    }
);

export const signInSuccess = (user) => (
    {
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: user,
    }
);

export const signInFailure = (error) => (
    {
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: error,
    }
);

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION,
});