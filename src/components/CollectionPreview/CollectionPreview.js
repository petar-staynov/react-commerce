import React from 'react';
import './CollectionPreview.scss';

const CollectionPreview = (props) => {
    return (
        <div className='collection-preview'>
            <h1 className='collection-title'>{props.title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    //TODO Remove filter to display more than 4 items
                    props.items
                        .filter((item, index) => index < 4)
                        .map((item) => {
                        return <div key={item.id}>{item.name}</div>
                    })
                }
            </div>
        </div>
    )
};

export default CollectionPreview;