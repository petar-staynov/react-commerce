import React, {Component} from 'react';
import {Route, Redirect} from "react-router-dom";
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

const HatsPage = () => (<h1>Hats</h1>);
const JacketsPage = () => (<h1>JACKETS</h1>);
const SneakerPage = () => (<h1>SNEAKERS</h1>);
const MensPage = () => (<h1>MEN'S</h1>);
const WomensPage = () => (<h1>WOMEN'S</h1>);

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


    authenticationRoute = () => {
        if (this.props.currentUser) {
            return (
                <Redirect to='/'/>
            )
        }
        return (
            <LoginRegisterContainer/>
        )
    };

    render() {
        return (
            <>
                <Navbar/>
                <Route path='/' exact component={Homepage}/>
                <Route path='/shop' exact component={ShopPage}/>
                <Route path='/shop/hats' exact component={HatsPage}/>
                <Route path='/shop/jackets' exact component={JacketsPage}/>
                <Route path='/shop/sneakers' exact component={SneakerPage}/>
                <Route path='/shop/mens' exact component={MensPage}/>
                <Route path='/shop/womens' exact component={WomensPage}/>
                <Route path='/authenticate' exact render={this.authenticationRoute}/>
                <Route path='/logout' exact component={Logout}/>
                <Route path='/checkout' exact component={CheckoutPage}/>
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
