import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {toggleCartHiddenAction, hideCartAction} from "../../redux/cart/cartActions";
import {selectCartItemsCount} from "../../redux/cart/cartSelectors";

import './CartIcon.scss';


const CartIcon = ({toggleCartHiddenAction, itemCount, history, hideCartAction, ...state}) => {
    history.listen(() => {
        hideCartAction();
    });

    return (
        <div className='cart-icon' onClick={toggleCartHiddenAction}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
};


const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = dispatch => ({
    toggleCartHiddenAction: () => dispatch(toggleCartHiddenAction()),
    hideCartAction: () => dispatch(hideCartAction()),
});


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon));