
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const checkoutContainer = document.querySelector('.checkout-items');
    let itemsTotal = 0;
    let etaMinutes = 0;
    const minutesPerItem = 3;

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

    document.querySelector('.items-total-price').textContent = `$${itemsTotal.toFixed(2)}`;
    document.querySelector('.eta-time').textContent = `${etaMinutes} minutes`;

    function updateTotal() {
        const tipAmount = parseFloat(document.getElementById('tip-amount').value) || 0;
        const total = itemsTotal + tipAmount;
        document.querySelector('.total-price').textContent = `$${total.toFixed(2)}`;
    }

    document.getElementById('tip-amount').addEventListener('input', updateTotal);

    document.getElementById('payment').addEventListener('change', function() {
        const paymentFormContainer = document.getElementById('payment-form-container');
        const discountCodeSection = document.querySelector('.discount-section')
        paymentFormContainer.innerHTML = '';
        discountCodeSection.innerHTML = '';
        const selectedPayment = this.value;
    
        if (selectedPayment === 'credit/debit') {
            paymentFormContainer.innerHTML =`
        <label for="card-number" style="font-size: 25px;">Card Number:</label>
        <input type="text" id="card-number" name="card-number" placeholder="XXXX-XXXX-XXXX-XXXX" required ;"><br>
        <label for="expiry-date" style="font-size: 25px;">Expiry Date:</label>
        <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required "><br>
        <label for="cvv" style="font-size: 25px;">CVV:</label>
        <input type="text" id="cvv" name="cvv" placeholder="XXX" required ;"><br>
        <label for="cardholder-name" style="font-size: 25px;">Cardholder Name:</label>
        <input type="text" id="cardholder-name" name="cardholder-name" required >
    `;
            discountCodeSection.innerHTML = `
  <label for="discount-code" style="font-size: 25px;">Enter Discount Code:</label>
  <input type="text" id="discount-code" placeholder="Enter code for discount" padding: 10px; width: 300px;">
  <button id="apply-discount" class="apply-discount-btn" ; padding: 10px 20px; margin-left: 10px; cursor: pointer;">Apply</button>
  <p class="discount-message" style="font-size: 25px; margin-top: 10px; color: #333;"></p>
`  ;
        } else if (selectedPayment === 'gift card') {
            paymentFormContainer.innerHTML = `
                <label for="gift-card-code" style="font-size: 25px;">Gift Card Code:</label>
                <input type="text" id="gift-card-code" name="gift-card-code" placeholder="Enter your gift card code" required>
            `;
            discountCodeSection.innerHTML = `
            <label for="discount-code" style="font-size: 25px;">Enter Discount Code:</label>
            <input type="text" id="discount-code" placeholder="Enter code for discount">
            <button id="apply-discount" class="apply-discount-btn">Apply</button>
            <p class="discount-message"></p>
        `   ;
        } else if (selectedPayment === 'cash') {
            paymentFormContainer.innerHTML = `
                <p style="font-size: 25px;">Please come to the register to complete your purchase.</p>
            `;
            discountCodeSection.innerHTML = `
            <label for="discount-code" style="font-size: 25px;">Enter Discount Code:</label>
            <input type="text" id="discount-code" placeholder="Enter code for discount">
            <button id="apply-discount" class="apply-discount-btn">Apply</button>
            <p class="discount-message"></p>
        `   ;
        }

        paymentFormContainer.appendChild(discountCodeSection);

        if (selectedPayment) {
            paymentFormContainer.innerHTML += `
                <button id="proceed-to-receipt" class="proceed-button" style = " margin-bottom: 20px;">Complete Purchase</button>
            `;
            document.getElementById('proceed-to-receipt').addEventListener('click', function() {
                const tipAmount = parseFloat(document.getElementById('tip-amount').value) || 0;
                localStorage.setItem('tipAmount', tipAmount.toFixed(2));
            
                const paymentMethod = document.getElementById('payment').value;
                localStorage.setItem('paymentMethod', paymentMethod);
            
                if (paymentMethod === 'credit/debit') {
                    const cardNumber = document.getElementById('card-number').value;
                    localStorage.setItem('cardLastFour', cardNumber.slice(-4)); 
                } else if (paymentMethod === 'gift card') {
                    const giftCardCode = document.getElementById('gift-card-code').value;
                    localStorage.setItem('giftCardCode', giftCardCode);
                } else if (paymentMethod === 'cash') {
                    localStorage.setItem('cashPayment', 'Please pay at the register.');
                }           
                window.location.href = 'receipt.html';
            });            
        }
        document.getElementById('apply-discount').addEventListener('click', function() {
            const discountCode = document.getElementById('discount-code').value;
            const itemsTotalPriceElement = document.querySelector('.items-total-price');
            const totalPriceElement = document.querySelector('.total-price');
            const discountMessageElement = document.querySelector('.discount-message');
            const tipAmount = parseFloat(document.getElementById('tip-amount').value) || 0;

            let itemsTotal = parseFloat(itemsTotalPriceElement.textContent.replace('$', '')) || 0;
            let discount = 0;

            const discountCodes = {
                'FALL2024': 0.10, 
                'TURKEY': 0.20, 
            };

            if (discountCodes[discountCode]) {
                discount = discountCodes[discountCode];
                const discountAmount = itemsTotal * discount;
                const discountedPrice = itemsTotal - discountAmount + tipAmount;

                localStorage.setItem('discountCode', discountCode);
                localStorage.setItem('discountPercent', discount * 100);

                totalPriceElement.textContent = `$${discountedPrice.toFixed(2)}`;
                discountMessageElement.textContent = `Discount Applied: ${Math.round(discount * 100)}% off!`;
                discountMessageElement.style.color = 'green';
            } else {
                discountMessageElement.textContent = 'Invalid discount code!';
                discountMessageElement.style.color = 'red';
            }
        });
    });
    });
    window.addEventListener('beforeunload', () => {
        paymentSelect.value = '';
    });
