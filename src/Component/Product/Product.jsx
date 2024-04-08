// import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Shoes = (props) => {
    const { name, img, price, seller, ratings } = props.product;
    //Important
    const addedProduct = props.addedProduct;
    return (
        <div className='shoes'>
            <img src={img} alt="" />
            <div className='shoes-text-style'>
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <div className='shoes-info'>
                    <p>Manufacturer: {seller}</p>
                    <p>Ratings: {ratings} star</p>
                </div>
            </div>
            <button onClick={() => addedProduct(props.product)} className='add-to-cart-btn'>Add to Cart <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    );
};


export default Shoes;