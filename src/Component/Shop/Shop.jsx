// import React from 'react';

import { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Shop.css'
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";


const Shop = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))

    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        //Step1: get id of the added product
        for (const id in storedCart) {
            //Step2: get product by id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                //Step3: add the quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //Step4: add the added product to save cart
                saveCart.push(addedProduct)
                console.log(addedProduct)
            }
        }
        setCart(saveCart)
        // console.log(storedCart);
    }, [products])
    //important
    const [cart, setCart] = useState([]);
    const addedProduct = (product) => {
        // const newCart = [...cart, product];

        //if product doesnot exist in the cart then set the quantiy of product =1
        //if exist then update quantity by one
        let newCart = [];
        const exist = cart.find(pd => pd.id === product.id);
        console.log(exist, product, cart)
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining, exist]
        }
        
        setCart(newCart);
        addToDb(product.id)
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