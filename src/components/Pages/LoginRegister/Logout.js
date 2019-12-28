import React from 'react';
import {auth, createUserProfileDocument} from "../../../firebase/firebase.utils";

const Logout = (props) => {
    console.log('logout');


    auth.signOut().then(r => {
        alert('Signed out successfully');
        props.history.push('/')
    }).catch(e => {
        console.log(e);
    });

    return null;
};

export default Logout;