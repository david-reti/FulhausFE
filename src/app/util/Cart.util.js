// Returns an object representing the cart with the item added - if the item is already in the cart, add to the quantity
const addProductToCart = (cart, product) => {
    const existing = cart.items.find(item => item.item._id === product._id);
    existing && (existing.quantity += 1);

    return {items: cart.items.concat(!existing ? [{item: product, quantity: 1}] : []), 
            total: cart.total + product.rentalPrice, open: true};
}

// Returns an object representing the cart with all instances of the item removed - if there are multiple items, subtract the correct price
const removeProductFromCart = (cart, product) => {
    const existing = cart.items.find(item => item.item._id === product._id);
    return {items: cart.items.filter(item => item.item._id !== product._id), 
            total: cart.total - (product.rentalPrice * (existing ? existing.quantity : 1)), 
            open: true};
}

export { addProductToCart, removeProductFromCart };
