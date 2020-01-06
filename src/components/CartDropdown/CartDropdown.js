import React, {Component} from 'react';
import './CartDropdown.scss';
import Button from "../Shared/Button/Button";

const CartDropdown = (props) => (
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <Button>GO TO CHECKOUT</Button>
    </div>
);

export default CartDropdown;