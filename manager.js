
function saveMenuItems() {
    const menuItems = [];
    document.querySelectorAll(".menu-items2").forEach(item => {
        const itemName = item.querySelector(".item-name strong").innerText;
        const itemDescription = item.querySelector(".item-name").innerText.replace(itemName + "\n", "");
        const itemPrice = item.querySelector(".price").innerText.replace('$', '');
        const itemImage = item.querySelector(".img2").src;

        menuItems.push({ itemName, itemDescription, itemPrice, itemImage });
    });
    localStorage.setItem("menuItems", JSON.stringify(menuItems));
}


function loadMenuItems() {
    const savedItems = JSON.parse(localStorage.getItem("menuItems"));
    if (savedItems) {
        const rowContainer = document.querySelector(".coffee .row");
        savedItems.forEach(({ itemName, itemDescription, itemPrice, itemImage }) => {
            const newItem = createMenuItem(itemName, itemDescription, itemPrice, itemImage);
            rowContainer.appendChild(newItem);
        });
    }
}

function createMenuItem(itemName, itemDescription, itemPrice, itemImage) {
    const newItem = document.createElement("div");
    newItem.classList.add("menu-items2");
    newItem.dataset.category = "coffee";

    newItem.innerHTML = `
        <img class="img2" src="${itemImage}" alt="">
        <div class="menu-item-details2">
            <p class="item-name"><strong>${itemName}</strong><br>${itemDescription}</p>
            <p class="price">$${parseFloat(itemPrice).toFixed(2)}</p>
        </div>
        <button class="btn-add">Add To cart</button>
        <button class="remove">Remove From List</button>
    `;

    
    newItem.querySelector(".remove").addEventListener("click", () => {
        newItem.remove();
        saveMenuItems();
    });

    return newItem;
}

document.querySelectorAll(".add-item").forEach((addItemButton) => {
    addItemButton.addEventListener("click", () => {
        const itemName = prompt("Enter the name of the new item:");
        const itemDescription = prompt("Enter a description for the new item:");
        const itemPrice = prompt("Enter the price of the new item:");
        const itemImage = prompt("Enter the URL of the image for the new item:");

        if (itemName && itemDescription && itemPrice && itemImage) {
            const newItem = createMenuItem(itemName, itemDescription, itemPrice, itemImage);
            const rowContainer = addItemButton.closest(".row");
            rowContainer.appendChild(newItem);
            saveMenuItems();
        } else {
            alert("Please fill out all details to add a new item.");
        }
    });
});


window.onload = function() {
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "manager") {
        alert("You do not have access to this page.");
        window.location.href = "menu.html";
    }
};


document.addEventListener("DOMContentLoaded", loadMenuItems);
