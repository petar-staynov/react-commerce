import React from 'react';
import {connect} from 'react-redux';

import './CollectionsOverview.scss';

import CollectionPreview from "../CollectionPreview/CollectionPreview";
import {selectCollections} from "../../redux/collections/collectionsSelector";

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {
                Object.values(collections).map((collection) =>
                    <CollectionPreview key={collection.id} {...collection}/>)
            }
        </div>
    )
};

const mapStateToProps = (state) => ({
    collections: selectCollections(state),
});

export default connect(mapStateToProps)(CollectionsOverview);