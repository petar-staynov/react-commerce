import React from 'react';
import './Navbar.scss';
import {NavLink} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/header-logo.svg';
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";

const Navbar = ({currentUser}) => {
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
                </div>
            </nav>
        </header>
    )
};

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Navbar);