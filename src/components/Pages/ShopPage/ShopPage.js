import React from 'react';
import {Route} from "react-router-dom";

import './ShopPage.scss';

import CollectionsOverview from "../../CollectionsOverview/CollectionsOverview";


const ShopPage = ({match}) => {
    console.log(match.path);
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`}/>
            <CollectionsOverview/>
        </div>
    );
};

export default ShopPage;