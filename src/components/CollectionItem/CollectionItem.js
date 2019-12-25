import React from 'react';
import './CollectionItem.scss';

const CollectionItem = (props) => {
    const imageStyle = {
        backgroundImage: `url(${props.imageUrl})`
    };


    return (
        <div className='collection-item'>
            <div className='item-image' style={imageStyle}></div>
            <div className='item-footer'>
                <span className='item-name'>{props.name}</span>
                <span className='item-price'>${props.price}</span>
            </div>
        </div>
    )
};

export default CollectionItem;