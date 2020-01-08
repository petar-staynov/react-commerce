import React, {Component} from 'react';
import {connect} from 'react-redux';
import './CartDropdown.scss';
import Button from "../Shared/Button/Button";
import CartItem from "../CartItem/CartItem";
import {selectCartItems} from "../../redux/cart/cartSelectors";

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {

                cartItems.length ?
                    cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem}/>
                        )
                    )
                    :
                    (
                        <span className='empty-message'>Your cart is empty</span>
                    )
            }
        </div>
        <Button>GO TO CHECKOUT</Button>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);