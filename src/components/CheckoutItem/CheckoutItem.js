import React from 'react';
import {connect} from "react-redux";
import {addItemAction, decreaseItemAction, removeItemAction} from "../../redux/cart/cartActions";

import './CheckoutItem.scss'

const CheckoutItem = ({cartItem, increaseItem, decreaseItem, removeItem}) => {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={cartItem.imageUrl} alt='item'/>
            </div>
            <span className='name'>{cartItem.name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => decreaseItem(cartItem)}>&#10094;</div>
                <span className='value'>{cartItem.quantity}</span>
                <div className='arrow' onClick={() => increaseItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>${cartItem.price}</span>
            <div className='remove-button' onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItemAction(item)),
    increaseItem: item => dispatch(addItemAction(item)),
    decreaseItem: item => dispatch(decreaseItemAction(item))
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);