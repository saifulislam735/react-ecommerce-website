// import React from 'react';

import { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Shop.css'
import Cart from "../Cart/Cart";


const Shop = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))

    }, [])
    //important
    const [cart, setCart] = useState([]);
    const addedProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(newCart);
    }

    return (

        <div className="grid-cart" >
            <div className="grid">
                {
                    products.map(product => <Product key={product.id} product={product} addedProduct={addedProduct}></Product>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div >
    );
};

export default Shop;