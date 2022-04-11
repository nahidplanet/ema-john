import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header-section'>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="" srcset="" />
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/order">order</a></li>
                        <li><a href="/inventory"> inventory</a></li>
                        <li><a href="/login">login</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;