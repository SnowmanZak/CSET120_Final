
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const checkoutContainer = document.querySelector('.checkout-items');
    let itemsTotal = 0;
    let etaMinutes = 0;
    const minutesPerItem = 3;

    // Display each cart item
    cartItems.forEach(item => {
        const price = parseFloat(item.price.replace('$', ''));
        const quantity = parseFloat(item.quantity);
        const itemTotal = price * quantity;
        itemsTotal += itemTotal;
        etaMinutes += quantity * minutesPerItem;

        const itemRow = document.createElement('div');
        itemRow.classList.add('cart-row');
        itemRow.innerHTML = `
            <p>${item.name}</p>
            <p>${item.quantity}</p>
            <p>$${itemTotal.toFixed(2)}</p>
        `;
        checkoutContainer.appendChild(itemRow);
    });

    // Display items total and ETA
    document.querySelector('.items-total-price').textContent = `$${itemsTotal.toFixed(2)}`;
    document.querySelector('.eta-time').textContent = `${etaMinutes} minutes`;

    // Update total with tip
    function updateTotal() {
        const tipAmount = parseFloat(document.getElementById('tip-amount').value) || 0;
        const total = itemsTotal + tipAmount;
        document.querySelector('.total-price').textContent = `$${total.toFixed(2)}`;
    }

    // Listen for tip input changes
    document.getElementById('tip-amount').addEventListener('input', updateTotal);

    // Payment method form
    document.getElementById('payment').addEventListener('change', function() {
        const paymentFormContainer = document.getElementById('payment-form-container');
        paymentFormContainer.innerHTML = '';
        const selectedPayment = this.value;

        if (selectedPayment === 'credit/debit') {
            paymentFormContainer.innerHTML = `
                <label for="card-number">Card Number:</label>
                <input type="text" id="card-number" name="card-number" placeholder="XXXX-XXXX-XXXX-XXXX" required><br>
                <label for="expiry-date">Expiry Date:</label>
                <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required><br>
                <label for="cvv">CVV:</label>
                <input type="text" id="cvv" name="cvv" placeholder="XXX" required><br>
                <label for="cardholder-name">Cardholder Name:</label>
                <input type="text" id="cardholder-name" name="cardholder-name" required>
            `;
        } else if (selectedPayment === 'gift card') {
            paymentFormContainer.innerHTML = `
                <label for="gift-card-code">Gift Card Code:</label>
                <input type="text" id="gift-card-code" name="gift-card-code" placeholder="Enter your gift card code" required>
            `;
        } else if (selectedPayment === 'cash') {
            paymentFormContainer.innerHTML = `
                <p>Please come to the register to complete your purchase.</p>
            `;
        }
    });

    // Initialize total with current tip value
    updateTotal();
});