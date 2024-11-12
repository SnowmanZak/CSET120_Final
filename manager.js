const removeButtons = document.querySelectorAll(".remove");


removeButtons.forEach(button => {
    button.addEventListener("click", function () {
        
        const menuItem = button.closest(".menu-items2");
        if (menuItem) {
            menuItem.remove();
        }
    });
});
const addItemButton = document.querySelector(".add-item");


addItemButton.addEventListener("click", () => {
   
    const itemName = prompt("Enter the name of the new coffee item:");
    const itemDescription = prompt("Enter a description for the new item:");
    const itemPrice = prompt("Enter the price of the new item:");
    const itemImage = prompt("Enter the URL of the image for the new item:");

    
    if (itemName && itemDescription && itemPrice && itemImage) {
      
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
        });

       
        const rowContainer = document.querySelector(".coffee .row");
        rowContainer.appendChild(newItem);
    } else {
        alert("Please fill out all details to add a new item.");
    }
});

window.onload = function() {
    const userRole = localStorage.getItem("userRole");
    if (userRole !== "manager") {
        alert("You do not have access to this page.");
        window.location.href = "menu.html"; 
    }
};