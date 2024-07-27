import { getShoppingCart } from "./utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('http://localhost:3000/products')
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart()
    const saveCart = [];

    for (const _id in storedCart) {
        const addedproduct = products.find(pd => pd._id === _id)
        if (addedproduct) {
            const quantity = storedCart[_id];//getting the quantity of each type added product quantity from loaclstorage 
            addedproduct.quantity = quantity;//set those quantity to the addedprouct which will help us letter
            saveCart.push(addedproduct)
        }
        // console.log(addedproduct)
    }
    return saveCart;
}

export default cartProductsLoader;