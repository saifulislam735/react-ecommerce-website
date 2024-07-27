// import React from 'react';

import { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Shop.css'
import Cart from "../Cart/Cart";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useLoaderData } from "react-router-dom";


const Shop = () => {
    const [products, setproducts] = useState([]);

    //pagination
    const { totalproducts } = useLoaderData()
    const productsPerPage = 9;
    const totalPages = Math.ceil(totalproducts / productsPerPage);
    //technique 1
    // const pageNumber = [];
    // for (let page = 1; page <= totalPages; page++) {
    //     pageNumber.push(page);
    // }

    //technique 2
    const pageNumbers = [...Array(totalPages).keys()]
    console.log(pageNumbers)

    const [pageNumberClicked, setPageNumberClicked] = useState(0)
    useEffect(() => {
        fetch(`http://localhost:3000/products?page=${pageNumberClicked}&limit=${productsPerPage}`)
            .then(res => res.json())
            .then(data => setproducts(data))

    }, [pageNumberClicked, productsPerPage])



    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        //Step1: get id of the added product
        for (const id in storedCart) {
            //Step2: get product by id
            const addedProduct = products.find(product => product._id === id)
            if (addedProduct) {
                //Step3: add the quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //Step4: add the added product to save cart
                saveCart.push(addedProduct)
                // console.log(addedProduct)
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
        const exist = cart.find(pd => pd._id === product._id);
        // console.log(exist, product, cart)
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd._id !== product._id)
            newCart = [...remaining, exist]
        }

        setCart(newCart);
        addToDb(product._id)
        // console.log(newCart);
    }

    //for clearing cart
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }



    return (

        <div className="grid-cart" >
            <div className="grid">
                {
                    products.map(product => <Product key={product._id} product={product} addedProduct={addedProduct}></Product>)
                }
            </div>
            <div>
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link to={'/react-ecommerce-website/order'} >
                        <button className="review-cart btn">Review Order <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                    </Link>
                </Cart>
            </div>
            <div>
                <div className="pagination-container">
                    <p>clicked page number: {pageNumberClicked}</p>
                    {pageNumbers.map(number => (
                        <button
                            key={number}
                            onClick={() => setPageNumberClicked(number)}
                            className={`pagination-button ${number === pageNumberClicked ? 'pagination-button-active' : ''}`}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Shop;