document.addEventListener("DOMContentLoaded", () => {
  const addNewItem = (button) => {
      const section = button.closest(".row");

      const itemName = prompt("Enter the item name:");
      const itemDescription = prompt("Enter the item description:");
      const itemPrice = prompt("Enter the item price (e.g., $5.00):");
      const itemImageURL = prompt("Enter the image URL for the item:");

      if (itemName && itemDescription && itemPrice && itemImageURL) {
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

          section.appendChild(newItem);

          // Attach remove handler to the new item's remove button
          attachRemoveHandler(newItem.querySelector(".remove"));

          alert(`${itemName} has been added to the menu!`);
      } else {
          alert("All fields are required to add a new item!");
      }
  };

  const removeItem = (button) => {
      const menuItem = button.closest(".menu-items2");
      const itemName = menuItem.querySelector(".item-name strong").textContent;

      if (confirm(`Are you sure you want to remove "${itemName}" from the menu?`)) {
          menuItem.remove();
          alert(`${itemName} has been removed from the menu.`);
      }
  };

  const attachRemoveHandler = (button) => {
      button.addEventListener("click", () => removeItem(button));
  };

  // Attach remove handlers to existing items on page load
  document.querySelectorAll(".remove").forEach(attachRemoveHandler);

  // Attach add item functionality to "Add Item" buttons
  document.querySelectorAll(".add-item").forEach((button) => {
      button.addEventListener("click", () => addNewItem(button));
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
        