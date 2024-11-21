document.addEventListener("DOMContentLoaded", () => {
    const UNSPLASH_ACCESS_KEY = "WAg3V-uI9b-SA_SrFzEeAsuctWSiTdimm3E2wYC_Lk0";

    const fetchImageURL = async (itemName) => {
        try {
            const response = await fetch(
                `https://api.unsplash.com/search/photos?query=${encodeURIComponent(itemName)}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=1`
            );
            const data = await response.json();
            return data.results?.[0]?.urls?.small || "https://via.placeholder.com/150?text=No+Image";
        } catch {
            return "https://via.placeholder.com/150?text=No+Image";
        }
    };

    const loadMenu = () => JSON.parse(localStorage.getItem("menuItems")) || [];

    const saveMenu = (menu) => localStorage.setItem("menuItems", JSON.stringify(menu));

    const renderManagerMenu = (filter = "all") => {
        const menuContainer = document.querySelector(".menu-items-con");
        const menuItems = loadMenu();

        menuContainer.innerHTML = ""; 

        const filteredItems = filter === "all"
            ? menuItems
            : menuItems.filter((item) => item.category === filter);

        filteredItems.forEach((item, index) => {
            const menuItem = `
                <div class="menu-items2" data-category="${item.category}">
                    <img class="img2" src="${item.image}" alt="${item.name}">
                    <div class="menu-item-details2">
                        <p class="item-name"><strong>${item.name}</strong></p>
                        <p>${item.description}</p>
                        <p class="price">${item.price}</p>
                    </div>
                    <button class="remove" data-index="${index}">Remove</button>
                </div>
            `;
            menuContainer.innerHTML += menuItem;
        });

        document.querySelectorAll(".remove").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const index = parseInt(e.target.dataset.index, 10);
                removeItem(index);
            });
        });
    };

    const addNewItem = async () => {
        const itemName = prompt("Enter the item name:");
        const itemDescription = prompt("Enter the item description:");
        const itemPrice = prompt("Enter the item price (e.g., $5.00):");
        const itemCategory = prompt("Enter the item category (e.g., coffee):");

        if (itemName && itemDescription && itemPrice && itemCategory) {
            const image = await fetchImageURL(itemName);
            const newItem = { name: itemName, description: itemDescription, price: itemPrice, image, category: itemCategory };

            const menu = loadMenu();
            menu.push(newItem);
            saveMenu(menu);
            renderManagerMenu();
            alert(`${itemName} added to the menu.`);
        } else {
            alert("All fields are required.");
        }
    };

    const removeItem = (index) => {
        const menu = loadMenu();
        if (confirm(`Remove "${menu[index].name}"?`)) {
            menu.splice(index, 1);
            saveMenu(menu);
            renderManagerMenu();
        }
    };

    const setupFilterButtons = () => {
        const filterButtons = document.querySelectorAll(".filter-btn");

        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                filterButtons.forEach((btn) => btn.classList.remove("active"));

                button.classList.add("active");

                const filter = button.getAttribute("data-filter");
                renderManagerMenu(filter);
            });
        });
    };

    document.querySelector(".add-item").addEventListener("click", addNewItem);

    renderManagerMenu(); 
    setupFilterButtons(); 
});
