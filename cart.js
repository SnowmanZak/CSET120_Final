if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.querySelector('.cart-items'); // Changed to .cart-items

    if (cartContainer) {
        cartItems.forEach(item => {
            const cartRow = createCartRow(item);
            cartContainer.appendChild(cartRow);

            const quantityInput = cartRow.querySelector('.cart-quantity-input');
            quantityInput.addEventListener('input', () => {
                updateQuantityInCart(item.name, quantityInput.value);
                updateCartTotal();
            });

            cartRow.querySelector('.btn-danger').addEventListener('click', function () {
                removeItemFromCart(item, cartRow);
            });
        });
    }

    const tipInput = document.querySelector('.tip-input');
    if (tipInput) {
        tipInput.addEventListener('input', updateCartTotal);
    }

    updateCartTotal();
}

function createCartRow(item) {
    const cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    cartRow.innerHTML = `
        <div class="menu-items">
            <img class="img3" src="${item.image}" alt="">
            <div class="menu-item-details">
                <p class="item-name">${item.name}</p>
                <p class="price">${item.price}</p>
            </div>
        </div>
        <div class="quantity">
            <input class="cart-quantity-input" type="number" value="${item.quantity}" min="1">
            <button class="btn2 btn-danger" type="button">REMOVE</button>
        </div>
    `;
    return cartRow;
}

function removeItemFromCart(item, cartRow) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(cartItem => cartItem.name !== item.name);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    cartRow.remove();
    updateCartTotal();
}

function updateQuantityInCart(itemName, newQuantity) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.map(cartItem =>
        cartItem.name === itemName ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function updateCartTotal() {
    let total = 0;

    document.querySelectorAll('.cart-row').forEach(row => {
        const priceText = row.querySelector('.price').textContent.replace('$', '');
        const price = parseFloat(priceText);

        const quantityInput = row.querySelector('.cart-quantity-input');
        const quantity = parseFloat(quantityInput.value);

        if (!isNaN(price) && !isNaN(quantity)) {
            total += price * quantity;
        }
    });

    const tipInputValue = document.querySelector('.tip-input')?.value || '0';
    const tipAmount = parseFloat(tipInputValue.replace('$', '')) || 0;

    total += tipAmount;
    
    localStorage.setItem('cartTip', tipAmount);

    const totalPriceElement = document.querySelector('.total-price');
    if (totalPriceElement) {
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    } else {
        console.error("Element with class '.total-price' not found.");
    }
}
