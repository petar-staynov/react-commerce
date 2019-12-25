import React from 'react';
import './App.css';
import Homepage from "./components/Pages/Homepage/Homepage";
import ShopPage from "./components/Pages/ShopPage/ShopPage";

import {Route} from "react-router";

const HatsPage = () => (<h1>Hats</h1>);
//jackets sneakers women men
const JacketsPage = () => (<h1>JACKETS</h1>);
const SneakerPage = () => (<h1>SNEAKERS</h1>);
const MensPage = () => (<h1>MEN'S</h1>);
const WomensPage = () => (<h1>WOMEN'S</h1>);



function App() {


    return (
        <div>
            <Route path='/' exact component={Homepage}/>
            <Route path='/shop' exact component={ShopPage}/>
            <Route path='/shop/hats' exact component={HatsPage}/>
            <Route path='/shop/jackets' exact component={JacketsPage}/>
            <Route path='/shop/sneakers' exact component={SneakerPage}/>
            <Route path='/shop/mens' exact component={MensPage}/>
            <Route path='/shop/womens' exact component={WomensPage}/>
        </div>
    );
}

export default App;
