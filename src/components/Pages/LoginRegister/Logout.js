import {auth} from "../../../firebase/firebase.utils";

const Logout = (props) => {
    auth.signOut().then(r => {
        alert('Signed out successfully');
        props.history.push('/')
    }).catch(e => {
        console.log(e);
    });

    return null;
};

export default Logout;