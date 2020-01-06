import React from 'react';
import './CollectionItem.scss';
import Button from "../Shared/Button/Button";
import {connect} from 'react-redux';
import {addItem} from "../../redux/cart/cartActions";

const CollectionItem = ({item, addItem}) => {
    const imageStyle = {
        backgroundImage: `url(${item.imageUrl})`
    };

    return (
        <div className='collection-item'>
            <div className='item-image' style={imageStyle}></div>
            <div className='item-footer'>
                <span className='item-name'>{item.name}</span>
                <span className='item-price'>${item.price}</span>
            </div>
            <Button onClick={addItem.bind(this, item)} inverted>Add to cart</Button>
        </div>
    )
};

const mapDispatchToProps = dispatch => (
    {
        addItem: item => dispatch(addItem(item))
    }
);

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);