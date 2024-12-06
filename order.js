if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", initializeOrderPage);
} else {
    initializeOrderPage();
}

function initializeOrderPage() {
    const loadMenu = () => {
        return JSON.parse(localStorage.getItem("menuItems")) || [];
    };

    const renderOrderMenu = () => {
        const menuContainer = document.querySelector(".menu-items-con");
        const menuItems = loadMenu();

        menuContainer.innerHTML = ""; 

        menuItems.forEach((item) => {
            const menuItemHTML = `
                <div class="menu-items2" data-category="${item.category}">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="menu-item-details2">
                        <p class="item-name"><strong>${item.name}</strong></p>
                        <p>${item.description}</p>
                        <p class="price">${item.price}</p>
                    </div>
                    <button class="btn-add">Add to Cart</button>
                </div>
            `;
            menuContainer.innerHTML += menuItemHTML;
        });

        setupAddToCartButtons();
    };

    const setupAddToCartButtons = () => {
        const buttons = document.querySelectorAll(".btn-add");
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const menuItem = button.closest(".menu-items2");
                const itemName = menuItem.querySelector(".item-name").textContent.trim();
                const itemPrice = menuItem.querySelector(".price").textContent.trim();
                const itemImage = menuItem.querySelector("img").src;
    
                const item = {
                    name: itemName,
                    price: itemPrice,
                    image: itemImage,
                    quantity: 1,
                };
    
                let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
                const existingItem = cartItems.find(cartItem => cartItem.name === itemName);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cartItems.push(item);
                }
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                alert("Item added to cart!");
            });
        });
    };

    const setupFilterButtons = () => {
        const filterButtons = document.querySelectorAll(".filter-btn");
        const menuItems = document.querySelectorAll(".menu-items2");

        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                filterButtons.forEach((btn) => btn.classList.remove("active"));
                button.classList.add("active");

                const filter = button.getAttribute("data-filter");

                menuItems.forEach((item) => {
                    if (filter === "all" || item.getAttribute("data-category") === filter) {
                        item.style.display = "block";
                    } else {
                        item.style.display = "none";
                    }
                });
            });
        });
    };

    renderOrderMenu(); 
    setupFilterButtons(); 
}
