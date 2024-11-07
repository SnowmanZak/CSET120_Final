document.getElementById("guestEnterButton").addEventListener("click", function () {
    // Get the guest name from input
    const guestName = document.getElementById("guestName").value.trim();

    if (guestName) {
        // Store the guest name in localStorage (or sessionStorage)
        localStorage.setItem("guestName", guestName);

        // Redirect to the home page
        window.location.href = "index.html";
    } else {
        alert("Please enter your name.");
    }
});