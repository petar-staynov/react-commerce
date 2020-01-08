import React from 'react';
import {connect} from "react-redux";
import {removeItemAction} from "../../redux/cart/cartActions";

import './CheckoutItem.scss'

const CheckoutItem = ({cartItem, removeItem}) => {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={cartItem.imageUrl} alt='item'/>
            </div>
            <span className='name'>{cartItem.name}</span>
            <span className='quantity'>{cartItem.quantity}</span>
            <span className='price'>{cartItem.price}</span>
            <div className='remove-button' onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItemAction(item)),
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);