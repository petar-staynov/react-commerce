import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotalPrice} from "../../../redux/cart/cartSelectors";

import './CheckoutPage.scss';
import CheckoutItem from "../../CheckoutItem/CheckoutItem";

const CheckoutPage = ({cartItems, totalPrice}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Amount</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <div className='total'>
                <span>TOTAL: ${totalPrice}</span>
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice,
});

export default connect(
    mapStateToProps,
)(CheckoutPage);