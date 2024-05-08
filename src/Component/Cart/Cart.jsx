// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

import './Cart.css'
const Cart = ({ cart }) => {

    let totalPrice = 0;
    let totalshipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalshipping = totalshipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
        console.log(quantity)
    }
    //tax
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalshipping + tax;
    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <div className="cart-style">
                <p>Selected Items :${quantity}</p>
                <p>Total Price :${totalPrice}</p>
                <p>Total Shipping Charge:${totalshipping}</p>
                <p>Tax:${tax.toFixed(2)}</p>
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