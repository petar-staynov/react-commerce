import React, {Component} from 'react';
import './App.css';
import Homepage from "./components/Pages/Homepage/Homepage";
import ShopPage from "./components/Pages/ShopPage/ShopPage";

import {Route} from "react-router";
import Navbar from "./components/Navbar/Navbar";
import LoginRegisterContainer from "./components/Pages/LoginRegister/LoginRegisterContainer";
import {auth} from "./firebase/firebase.utils";


const HatsPage = () => (<h1>Hats</h1>);
const JacketsPage = () => (<h1>JACKETS</h1>);
const SneakerPage = () => (<h1>SNEAKERS</h1>);
const MensPage = () => (<h1>MEN'S</h1>);
const WomensPage = () => (<h1>WOMEN'S</h1>);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({
                currentUser: user,
            });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <>
                <Navbar currentUser={this.state.currentUser}/>
                <Route path='/' exact component={Homepage}/>
                <Route path='/shop' exact component={ShopPage}/>
                <Route path='/shop/hats' exact component={HatsPage}/>
                <Route path='/shop/jackets' exact component={JacketsPage}/>
                <Route path='/shop/sneakers' exact component={SneakerPage}/>
                <Route path='/shop/mens' exact component={MensPage}/>
                <Route path='/shop/womens' exact component={WomensPage}/>
                <Route path='/authenticate' exact component={LoginRegisterContainer}/>
            </>
        );
    };

}

export default App;
