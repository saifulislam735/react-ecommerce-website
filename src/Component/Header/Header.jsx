// import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <ul className='listing'>
                <Link to={'/react-ecommerce-website/'}><span>Shop</span></Link>
                <Link to={'/react-ecommerce-website/order'}><span>Order</span></Link>
                <Link to={'/react-ecommerce-website/manage'}><span>Manage Inventory</span></Link>
                <Link to={'/react-ecommerce-website/login'}><span>Login</span></Link>
            </ul>
        </div>
    );
};

export default Header;