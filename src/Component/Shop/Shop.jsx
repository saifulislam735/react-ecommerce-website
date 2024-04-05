// import React from 'react';

import { useEffect, useState } from "react";
import Shoes from "../Shoes/Shoes";
import './Shop.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
const Shop = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))

    }, [])
    return (
        <div className="grid-cart">
            <div className="grid">
                {
                    products.map(product => <Shoes key={product.id} product={product} ></Shoes>)
                }
            </div>
            <div className="cart">
                <h2>Order Summary</h2>
                <div className="cart-style">
                    <p>Selected Items:{ }</p>
                    <p>Total Price:{ }</p>
                    <p>Total Shipping Charge:{ }</p>
                    <p>Tax:{ }</p>
                    <h3>Grand Total:{ }</h3>
                </div>
                <div className="cart-btn">
                    <button className="clear-cart">Clear cart <FontAwesomeIcon icon={faDeleteLeft} /></button>
                    <button className="review-cart">Review Order <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default Shop;