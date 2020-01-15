import React from 'react';
import {connect} from 'react-redux';

import './CollectionsOverview.scss';

import CollectionPreview from "../CollectionPreview/CollectionPreview";
import {selectCollections} from "../../redux/collections/collectionsSelector";
import Spinner from "../Spinner/Spinner";

function CollectionsOverview(props) {
    const {collections} = props;
    return collections
        ? (
            <div className='collections-overview'>
                {
                    Object.values(collections).map((collection) =>
                        <CollectionPreview key={collection.id} {...collection}/>)
                }
            </div>)
        : <Spinner/>
};

const mapStateToProps = (state) => ({
    collections: selectCollections(state),
});

export default connect(
    mapStateToProps,
)(CollectionsOverview);