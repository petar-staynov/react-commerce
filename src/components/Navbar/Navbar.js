import React from 'react';
import './Navbar.scss';
import {NavLink} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/header-logo.svg';
import {connect} from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

const Navbar = ({currentUser, cartHidden}) => {
    let userAuthElement = <NavLink to='/authenticate' exact className='nav-item'>Sign In</NavLink>;
    if (currentUser) {
        userAuthElement = <NavLink to='/logout' exact className='nav-item'>Sign Out</NavLink>;
    }

    return (
        <header>
            <nav className='navbar'>
                <NavLink to='/' className='logo-container'>
                    <Logo className='logo'/>
                </NavLink>

                <div className='nav-items'>
                    <NavLink to='/' exact className='nav-item'>Home</NavLink>
                    <NavLink to='/shop' exact className='nav-item'>Shop</NavLink>
                    <NavLink to='/contact' exact className='nav-item'>Contact</NavLink>
                    {userAuthElement}
                    <CartIcon/>
                </div>
                {
                    cartHidden ? null : <CartDropdown/>
                }
            </nav>
        </header>
    )
};

const mapStateToProps = ({user, cart}) => ({
    currentUser: user.currentUser,
    cartHidden: cart.cartHidden,
});

export default connect(mapStateToProps)(Navbar);