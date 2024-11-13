document.addEventListener("DOMContentLoaded", function () {
   
    const loginButton = document.querySelector(".signup-enter");
    const usernameInput = document.querySelector("input[type='Username']");
    const emailInput = document.querySelector("input[type='Email']");
    const passwordInput = document.querySelector("input[type='Password']");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault();

        const enteredUsername = usernameInput.value.trim();
        const enteredEmail = emailInput.value.trim();
        const enteredPassword = passwordInput.value;

      
        const savedUsername = localStorage.getItem("username");
        const savedEmail = localStorage.getItem("email");
        const savedPassword = localStorage.getItem("password");

        const managerCredentials = {
            username: "Manager",
            email: "manager@example.com",
            password: "Manager123"
        };

        if (
            enteredUsername === managerCredentials.username &&
            enteredEmail === managerCredentials.email &&
            enteredPassword === managerCredentials.password
        ) {
            alert("Welcome, Manager!");
            localStorage.setItem("userRole", "manager");
            window.location.href = "manager.html"; 
        } 
    
        else if (
            enteredUsername === savedUsername &&
            enteredEmail === savedEmail &&
            enteredPassword === savedPassword
        ) {
            alert("Login successful!");
            localStorage.setItem("userRole", "customer");
            window.location.href = "order.html"; 
        } 
       
        else {
            alert("Incorrect username, email, or password. Please try again.");
        }
    });
});