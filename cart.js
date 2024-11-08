if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.querySelector('.cart');

    if (cartContainer) {
        cartItems.forEach(item => {
            const cartRow = createCartRow(item);
            cartContainer.appendChild(cartRow);

            cartRow.querySelector('.cart-quantity-input').addEventListener('input', updateCartTotal);
            cartRow.querySelector('.btn-danger').addEventListener('click', function () {
                removeItemFromCart(item, cartRow);
            });
        });
    }
    document.querySelector('.tip-input').addEventListener('input', updateCartTotal);

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
            <input class="cart-quantity-input" type="number" value="${item.quantity}">
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

function updateCartTotal() {
    let total = 0;
    document.querySelectorAll('.cart-row').forEach(row => {
        const price = parseFloat(row.querySelector('.price').textContent.replace('$', ''));
        const quantity = parseInt(row.querySelector('.cart-quantity-input').value);
        total += price * quantity;
    });

    const tipAmount = parseFloat(document.querySelector('.tip-input').value.replace('$', '')) || 0;
    total += tipAmount;

    document.querySelector('.total-price').textContent = `$${total.toFixed(2)}`;
}
