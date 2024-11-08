document.getElementById("guestEnterButton").addEventListener("click", function () {
    // Get the guest name from input
    const guestName = document.getElementById("guestName").value.trim();

    if (guestName) {
      
        localStorage.setItem("guestName", guestName);

    
        window.location.href = "index.html";
    } else {
        alert("Please enter your name.");
    }
});


