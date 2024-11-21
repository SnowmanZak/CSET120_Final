document.addEventListener("DOMContentLoaded", () => {
    const UNSPLASH_ACCESS_KEY = "WAg3V-uI9b-SA_SrFzEeAsuctWSiTdimm3E2wYC_Lk0";
  
    const fetchImageURL = async (itemName) => {
      try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(itemName)}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=1`);
        const data = await response.json();
        console.log("Unsplash API response:", data);
  
        if (data.results && data.results.length > 0) {
          console.log("Image found:", data.results[0].urls.small);
          return data.results[0].urls.small; 
        } else {
          console.log("No image found, returning placeholder.");
          return "https://via.placeholder.com/150?text=No+Image"; 
        }
      } catch (error) {
        console.error("Error fetching image from Unsplash:", error);
        return "https://via.placeholder.com/150?text=No+Image"; 
      }
    };
    const addNewItem = async (button) => {
      const section = button.closest(".row");
  
      const itemName = prompt("Enter the item name:");
      const itemDescription = prompt("Enter the item description:");
      const itemPrice = prompt("Enter the item price (e.g., $5.00):");
  
      if (itemName && itemDescription && itemPrice) {
        console.log("Adding new item:", itemName, itemDescription, itemPrice);
  
        const itemImageURL = await fetchImageURL(itemName);
        console.log("Image URL fetched:", itemImageURL); 
  
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
  
        attachRemoveHandler(newItem.querySelector(".remove"));
  
        alert(`${itemName} has been added to the menu!`);
      } else {
        alert("All fields are required to add a new item.");
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
  
    document.querySelectorAll(".remove").forEach(attachRemoveHandler);
  
    document.querySelectorAll(".add-item").forEach((button) => {
      button.addEventListener("click", () => addNewItem(button));
    });
  });