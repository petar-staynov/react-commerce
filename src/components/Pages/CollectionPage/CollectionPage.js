import React from 'react';
import {selectCollectionByName} from "../../../redux/collections/collectionsSelector";
import {connect} from 'react-redux'

import './CollectionPage.scss';

import CollectionItem from "../../CollectionItem/CollectionItem";


const CollectionPage = ({collection}) => {
    return (
        <div className='collection-page'>
            <h2 className='title'>{collection.title}</h2>
            <div className='items'>
                {
                    collection.items.map(item =>
                        <CollectionItem key={item.id} item={item}/>)
                }
            </div>

        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollectionByName(ownProps.match.params.categoryName)(state)
});

export default connect(mapStateToProps)(CollectionPage);