import { getShoppingCart } from "./utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart()
    const saveCart = [];

    for (const id in storedCart) {
        const addedproduct = products.find(pd => pd.id === id)
        if (addedproduct) {
            const quantity = storedCart[id];//getting the quantity of each type added product quantity from loaclstorage 
            addedproduct.quantity = quantity;//set those quantity to the addedprouct which will help us letter
            saveCart.push(addedproduct)
        }
        // console.log(addedproduct)
    }
    return saveCart;
}

export default cartProductsLoader;