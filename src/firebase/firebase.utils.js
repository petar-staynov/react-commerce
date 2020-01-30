import firebase from 'firebase/app';
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const createCollection = async (collectionName, objects) => {
    const collectionRef = firestore.collection(collectionName);

    const batch = firestore.batch();
    objects.forEach(obj => {
        const newDocRef = collectionRef.doc(obj.title);
        batch.set(newDocRef, obj);
    });

    return await batch.commit()
};

export const getCollections = (collections) => {
    const collectionsArr = collections.docs.map(doc => {
        const {title, items} = doc.data();

        const collectionObject = {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
        return collectionObject;
    });

    const collectionsMap = collectionsArr.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});

    return collectionsMap;
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;


