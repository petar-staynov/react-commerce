import React from 'react';
import './Navbar.scss';
import {NavLink} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/header-logo.svg';

const Navbar = (props) => {
    return (
        <header>
            <nav className='navbar'>
                <NavLink to='/' className='logo-container'>
                    <Logo className='logo'/>
                </NavLink>

                <div className='nav-items'>
                    <NavLink to='/' className='nav-item'>Home</NavLink>
                    <NavLink to='/shop' className='nav-item'>Shop</NavLink>
                    <NavLink to='/contact' className='nav-item'>Contact</NavLink>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;