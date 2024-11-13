document.addEventListener('DOMContentLoaded', () => {
    const orderReceiptContainer = document.querySelector('.order-receipt');
    const totalPriceElement = document.querySelector('.total-price');

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const username = localStorage.getItem('username') || "Customer";
    const tipAmount = parseFloat(localStorage.getItem('tipAmount')) || 0;
    const paymentMethod = localStorage.getItem('paymentMethod');
    
    document.querySelector('.order-name').textContent = `${username}'s order`;

    let total = 0;

    cartItems.forEach(item => {
        const price = parseFloat(item.price.replace('$', ''));
        const quantity = parseInt(item.quantity);
        const itemTotal = price * quantity;
        total += itemTotal;

        const itemDetail = document.createElement('div');
        itemDetail.classList.add('menu-item-details4');
        itemDetail.innerHTML = `
            <p class="item-name"><strong>${item.name}</strong><br> X ${quantity}</p>
            <p class="price">$${itemTotal.toFixed(2)}</p>
        `;
        
        orderReceiptContainer.appendChild(itemDetail);
    });

    total += tipAmount;

    const tipElement = document.createElement('div');
    tipElement.classList.add('menu-item-details4');
    tipElement.innerHTML = `
        <p class="item-name"><strong>Tip</strong></p>
        <p class="price">$${tipAmount.toFixed(2)}</p>
    `;
    orderReceiptContainer.appendChild(tipElement);

    totalPriceElement.textContent = `$${total.toFixed(2)}`;

    const paymentDetailsSection = document.createElement('div');
    paymentDetailsSection.classList.add('payment-details');

    let paymentDetailsHTML = `<h3>Payment Method: ${paymentMethod}</h3>`;

    if (paymentMethod === 'credit/debit') {
        const cardLastFour = localStorage.getItem('cardLastFour');
        paymentDetailsHTML += `<p>Card ending in: **** ${cardLastFour}</p>`;
    } else if (paymentMethod === 'gift card') {
        const giftCardCode = localStorage.getItem('giftCardCode');
        paymentDetailsHTML += `<p>Gift Card Code: ${giftCardCode}</p>`;
    } else if (paymentMethod === 'cash') {
        const cashPayment = localStorage.getItem('cashPayment');
        paymentDetailsHTML += `<p>${cashPayment}</p>`;
    }

    paymentDetailsSection.innerHTML = paymentDetailsHTML;
    orderReceiptContainer.appendChild(paymentDetailsSection);
});
