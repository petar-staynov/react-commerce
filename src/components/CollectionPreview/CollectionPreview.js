import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = (props) => {
    return (
        <div className='collection-preview'>
            <h1 className='collection-title'>{props.title.toUpperCase()}</h1>
            <div className='item-preview'>
                {
                    //TODO Remove filter to display more than 4 items
                    props.items
                        .filter((item, index) => index < 4)
                        .map((item) => {
                            return <CollectionItem key={item.id} item={item}/>
                        })
                }
            </div>
        </div>
    )
};

export default CollectionPreview;