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


document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const signupButton = document.getElementById('signup-button');
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');
    const usernameDisplay = document.getElementById('username-display');

   
    const loggedInUser = localStorage.getItem('username');
    
    if (loggedInUser) {
       
        usernameDisplay.textContent = loggedInUser;
        usernameDisplay.style.display = 'inline';
        loginLink.style.display = 'none';
        signupLink.style.display = 'none';
    }


    function logIn(username) {
        localStorage.setItem('username', username);
        location.reload(); 
    }

    
    usernameDisplay.addEventListener('click', () => {
        localStorage.removeItem('username');
        location.reload(); 
    });
});
