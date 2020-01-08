import React from 'react';
import CollectionPreview from "../../CollectionPreview/CollectionPreview";
import {connect} from "react-redux";
import {selectCollections} from "../../../redux/collections/collectionsSelector";

import './ShopPage.scss';


const ShopPage = ({collections}) => {
    console.log(collections);
    return (
        <div className='shop-page'>
            {
                collections.map((collection) => {
                    return <CollectionPreview key={collection.id} {...collection}/>
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    collections: selectCollections(state),
});

export default connect(mapStateToProps)(ShopPage);