import React, {Component} from 'react';
import {connect} from 'react-redux';
import './CartDropdown.scss';
import Button from "../Shared/Button/Button";
import CartItem from "../CartItem/CartItem";

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            }
        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
);

const mapStateToProps = ({cart}) => ({
    cartItems: cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);