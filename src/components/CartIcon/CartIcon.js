import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {toggleCartHidden, hideCart} from "../../redux/cart/cartActions";
import {selectCartItemsCount} from "../../redux/cart/cartSelectors";

import './CartIcon.scss';


const CartIcon = ({toggleCartHidden, itemCount, history, hideCart, ...state}) => {
    history.listen(() => {
        hideCart();
    });

    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
};


const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
    hideCart: () => dispatch(hideCart()),
});


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon));