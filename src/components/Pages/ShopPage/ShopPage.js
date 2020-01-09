import React from 'react';

import './ShopPage.scss';

import CollectionsOverview from "../../CollectionsOverview/CollectionsOverview";


const ShopPage = ({match}) => {
    console.log(match.path);
    return (
        <div className='shop-page'>
            <CollectionsOverview/>
        </div>
    );
};

export default ShopPage;