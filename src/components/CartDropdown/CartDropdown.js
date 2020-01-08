import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import './CartDropdown.scss';
import Button from "../Shared/Button/Button";
import CartItem from "../CartItem/CartItem";
import {selectCartItems} from "../../redux/cart/cartSelectors";

const CartDropdown = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {

                cartItems.length
                    ? cartItems.map(cartItem =>
                        (<CartItem key={cartItem.id} item={cartItem}/>))
                    : (<span className='empty-message'>Your cart is empty</span>)
            }
        </div>
        <Button onClick={() => history.push('/checkout')}>GO TO CHECKOUT</Button>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
});

export default withRouter(
    connect(mapStateToProps)
    (CartDropdown)
);