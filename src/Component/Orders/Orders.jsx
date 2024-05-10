
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useState } from 'react';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';


const Order = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart);

    const handleRemoveItems = (id) => {
        console.log(id)
        const remaining = cart.filter(pd => pd.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='grid-cart'>
            <div>
                {
                    cart.map(products => <ReviewItem key={products.id} products={products} handleRemoveItems={handleRemoveItems}></ReviewItem>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link to={'/react-ecommerce-website/checkout'}>
                        <button className="review-cart btn">Proceed Checkout <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;   