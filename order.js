if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-items2');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');

            menuItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
function ready() {
    const buttons = document.querySelectorAll('.btn-add');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const menuItem = button.closest('.menu-items2');
            const itemName = menuItem.querySelector('.item-name').textContent;
            const itemPrice = menuItem.querySelector('.price').textContent;
            const itemImage = menuItem.querySelector('img').src;
        
            const item = {
                name: itemName,
                price: itemPrice,
                image: itemImage,
                quantity: 1  
            };
            
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            
            cartItems.push(item);
            
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            alert('Item added to cart!');
        });
    });
}
