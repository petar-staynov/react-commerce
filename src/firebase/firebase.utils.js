import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhqj1AX3777BEYv_3dkh0aQwMaMgofBPc",
    authDomain: "react-commerce-b27ed.firebaseapp.com",
    databaseURL: "https://react-commerce-b27ed.firebaseio.com",
    projectId: "react-commerce-b27ed",
    storageBucket: "react-commerce-b27ed.appspot.com",
    messagingSenderId: "741645721856",
    appId: "1:741645721856:web:4e4f6726a22100707853e5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
