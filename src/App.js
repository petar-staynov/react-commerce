import React, {Component} from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/userActions";
import {selectCurrentUser} from "./redux/user/userSelector";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

import './App.css';

import Homepage from "./components/Pages/Homepage/Homepage";
import ShopPage from "./components/Pages/ShopPage/ShopPage";
import Navbar from "./components/Navbar/Navbar";
import LoginRegisterContainer from "./components/Pages/LoginRegister/LoginRegisterContainer";
import Logout from "./components/Pages/LoginRegister/Logout";
import CheckoutPage from "./components/Pages/CheckoutPage/CheckoutPage";
import CollectionPage from "./components/Pages/CollectionPage/CollectionPage";

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(userSnapshot => {
                    this.props.setCurrentUser({
                        id: userSnapshot.id,
                        ...userSnapshot.data(),
                    })
                });
            }

            this.props.setCurrentUser(userAuth);
        });
    }


    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    authenticationRoute = () =>
        this.props.currentUser
            ? <Redirect to='/'/>
            : <LoginRegisterContainer/>;

    render() {
        return (
            <>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/shop/:categoryName' component={CollectionPage}/>
                    <Route exact path='/authenticate' render={this.authenticationRoute}/>
                    <Route exact path='/logout' component={Logout}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                </Switch>
            </>
        );
    };

}

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(App);
