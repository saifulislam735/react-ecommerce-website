
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useState } from 'react';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

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
                ></Cart>
            </div>
        </div>
    );
};

export default Order;   