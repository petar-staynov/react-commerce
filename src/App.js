import React, {Component} from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {selectCurrentUser} from "./redux/user/userSelector";
import {auth, createUserProfileDocument, createCollection} from "./firebase/firebase.utils";

import './App.css';

import Homepage from "./components/Pages/Homepage/Homepage";
import ShopPage from "./components/Pages/ShopPage/ShopPage";
import Navbar from "./components/Navbar/Navbar";
import LoginRegisterContainer from "./components/Pages/LoginRegister/LoginRegisterContainer";
import Logout from "./components/Pages/LoginRegister/Logout";
import CheckoutPage from "./components/Pages/CheckoutPage/CheckoutPage";
import {checkUserSession} from "./redux/user/userActions";

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {checkUserSession} = this.props;
        checkUserSession();

        //
        //     /** Create Collections in Firebase **/
        //     // this.props.setCurrentUser(userAuth);
        //     // const collectionsValues = Object.values(this.props.collections);
        //     // const collectionsArr =
        //     //     collectionsValues.map(({title, items}) => ({title, items}));
        //     // await createCollection('collections', collectionsArr)
        // });
    }


    componentWillUnmount() {
        // this.unsubscribeFromAuth();
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
                    <Route path='/shop' component={ShopPage}/>
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
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(App);
