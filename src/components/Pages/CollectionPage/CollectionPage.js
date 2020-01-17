import React from 'react';
import {selectCollectionByName} from "../../../redux/collections/collectionsSelector";
import {connect} from 'react-redux'

import './CollectionPage.scss';

import CollectionItem from "../../CollectionItem/CollectionItem";
import Spinner from "../../Spinner/Spinner";


const CollectionPage = ({collection}) => {
    return collection ? (
        <div className='collection-page'>
            <h2 className='title'>{collection.title}</h2>
            <div className='items'>
                {
                    collection.items.map(item =>
                        <CollectionItem key={item.id} item={item}/>)
                }
            </div>

        </div>
    ) : <Spinner/>
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollectionByName(ownProps.match.params.collectionName)(state)
});

export default connect(
    mapStateToProps
)(CollectionPage);