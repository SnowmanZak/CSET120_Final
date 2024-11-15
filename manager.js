document.addEventListener("DOMContentLoaded", () => {
    // Function to handle adding a new item
    const addNewItem = (button) => {
      const section = button.closest(".row");
  
      // Prompt user for item details
      const itemName = prompt("Enter the item name:");
      const itemDescription = prompt("Enter the item description:");
      const itemPrice = prompt("Enter the item price (e.g., $5.00):");
      const itemImageURL = prompt("Enter the image URL for the item:");
  
      if (itemName && itemDescription && itemPrice && itemImageURL) {
        // Create a new menu item
        const newItem = document.createElement("div");
        newItem.className = "menu-items2";
        newItem.dataset.category = "custom";
        newItem.innerHTML = `
          <img class="img2" src="${itemImageURL}" alt="${itemName}">
          <div class="menu-item-details2">
              <p class="item-name"><strong>${itemName}</strong><br>${itemDescription}</p>
              <p class="price">${itemPrice}</p>
          </div>
          <button class="btn-add">Add To cart</button>
          <button class="remove">Remove From List</button>
        `;
  
        // Append the new item to the section
        section.appendChild(newItem);
  
        // Attach remove functionality to the new "Remove From List" button
        attachRemoveHandler(newItem.querySelector(".remove"));
  
        alert(`${itemName} has been added to the menu!`);
      } else {
        alert("All fields are required to add a new item.");
      }
    };
  
    // Function to handle removing an item
    const removeItem = (button) => {
      const menuItem = button.closest(".menu-items2");
      const itemName = menuItem.querySelector(".item-name strong").textContent;
  
      if (confirm(`Are you sure you want to remove "${itemName}" from the menu?`)) {
        menuItem.remove();
        alert(`${itemName} has been removed from the menu.`);
      }
    };
  
    // Attach remove functionality to all initial "Remove From List" buttons
    const attachRemoveHandler = (button) => {
      button.addEventListener("click", () => removeItem(button));
    };
  
    document.querySelectorAll(".remove").forEach(attachRemoveHandler);
  
    // Attach add functionality to all "Add Item" buttons
    document.querySelectorAll(".add-item").forEach((button) => {
      button.addEventListener("click", () => addNewItem(button));
    });
  });
  