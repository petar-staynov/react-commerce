import React from 'react';
import './MenuItem.scss';

function MenuItem(props) {
    const backgroundImageStyle = {
        backgroundImage: `url(${props.imageUrl })`,
    };

    const menuItemClassName= `menu-item ${props.size}`;

    const title = props.title.charAt(0).toUpperCase() + props.title.slice(1);
    return (
        <div className={menuItemClassName} >
            <div className='background-image' style={backgroundImageStyle}></div>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
};



export default MenuItem;