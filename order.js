if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

// document.addEventListener("DOMContentLoaded", () => {
//     const cartCountElement = document.getElementById("cart-count");
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     function updateCartDisplay() {
//         cartCountElement.innerText = cart.length;
//     }

//     function addToCart(item) {
//         cart.push(item);
//         localStorage.setItem("cart", JSON.stringify(cart));
//         updateCartDisplay();
//     }

//     document.querySelectorAll(".btn-add").forEach(button => {
//         button.addEventListener("click", () => {
//             const itemElement = button.closest(".menu-items2");
//             const itemName = itemElement.querySelector(".item-name").innerText;
//             const itemPrice = itemElement.querySelector(".price").innerText;

//             addToCart({ name: itemName, price: itemPrice });
//             alert(`${itemName} added to cart!`);
//         });
//     });

//     // Initialize cart display on page load
//     updateCartDisplay();
// });
