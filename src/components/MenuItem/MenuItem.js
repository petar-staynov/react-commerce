import React from 'react';
import './MenuItem.scss';

function MenuItem(props) {
    const title = props.title.charAt(0).toUpperCase() + props.title.slice(1);
    return (
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
};

export default MenuItem;