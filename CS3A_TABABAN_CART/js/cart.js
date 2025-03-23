
const cart = {};

function addToCart(productName, productPrice) {
    
    if (cart[productName]) {
        cart[productName].quantity += 1;
        cart[productName].totalPrice += productPrice;
    } else {
        cart[productName] = {
            quantity: 1,
            totalPrice: productPrice
        };
    }
    
    updateCartDisplay();
}


function removeFromCart(productName, productPrice) {
   
    if (cart[productName] && cart[productName].quantity > 0) {
        cart[productName].quantity -= 1; 
        cart[productName].totalPrice -= productPrice;

        if (cart[productName].quantity == 0) {
            delete cart[productName];
        }
    } else {
        alert('The item is not in the cart!');
    }
    
    updateCartDisplay();
}


function updateCartDisplay() {
    const cartList = document.getElementById('products');
    cartList.innerHTML = ''; 
    for (let product in cart) {
        const listItem = document.createElement('li');
        listItem.innerText = `${product} 
                            - Quantity: ${cart[product].quantity} 
                            - Total Price: Php ${cart[product].totalPrice.toFixed(2)}`;
        cartList.appendChild(listItem);
    }
}