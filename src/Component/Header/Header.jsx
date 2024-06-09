// import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContex } from '../Provider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContex)
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <ul className='listing'>
                <Link to={'/react-ecommerce-website/'}><span>Shop</span></Link>
                <Link to={'/react-ecommerce-website/order'}><span>Order</span></Link>
                <Link to={'/react-ecommerce-website/manage'}><span>Manage Inventory</span></Link>
                <Link to={'/react-ecommerce-website/login'}><span>Login</span></Link>
                <Link to={'/react-ecommerce-website/signup'}><span>SignUp</span></Link>
                <div style={{ background: 'gray', padding: '4px', borderRadius: '2px' }}>
                    {user ?
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <Link to={'/react-ecommerce-website/'}><span>{user.email}</span></Link>
                            <button onClick={logOut}>SignOut</button>
                        </div>

                        :
                        ""
                    }
                </div>
            </ul>
        </div>
    );
};

export default Header;