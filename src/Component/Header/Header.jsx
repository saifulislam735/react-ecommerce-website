// import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <ul className='listing'>
                <li>Order</li>
                <li>Order Review</li>
                <li>Manage Inventory</li>
                <li>Login</li>
            </ul>
        </div>
    );
};

export default Header;