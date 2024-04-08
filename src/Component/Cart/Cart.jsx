// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

import './Cart.css'
const Cart = ({ cart }) => {

    let totalPrice = 0;
    let totalshipping = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price
        totalshipping = totalshipping + product.shipping;
    }
    //tax
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalshipping + tax;
    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <div className="cart-style">
                <p>Selected Items :${cart.length}</p>
                <p>Total Price :${totalPrice}</p>
                <p>Total Shipping Charge:${totalshipping}</p>
                <p>Tax:${tax.toFixed}</p>
                <h3>Grand Total:${grandTotal.toFixed(2)}</h3>
            </div>
            <div className="cart-btn">
                <button className="clear-cart btn">Clear cart <FontAwesomeIcon icon={faDeleteLeft} /></button>
                <button className="review-cart btn">Review Order <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            </div>
        </div>
    );
};

export default Cart;