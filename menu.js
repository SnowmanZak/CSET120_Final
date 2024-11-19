document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-items');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons, then add to the clicked button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Get filter category from clicked button
            const filter = button.getAttribute('data-filter');

            // Loop through all menu items
            menuItems.forEach(item => {
                // Show or hide items based on filter
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}); 
 function loadMenu() {
    return JSON.parse(localStorage.getItem('menuItems')) || [];
}

// Render the menu on the customer page
function renderCustomerMenu() {
    const menu = loadMenu();
    const container = document.getElementById('customer-menu-container');
    container.innerHTML = '';

    menu.forEach((item) => {
        const menuItemHTML = `
            <div class="menu-item">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <p><strong>${item.name}</strong></p>
                    <p>${item.description}</p>
                    <p>${item.price}</p>
                </div>
            </div>
        `;
        container.innerHTML += menuItemHTML;
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderCustomerMenu);
