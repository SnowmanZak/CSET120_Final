document.addEventListener("DOMContentLoaded", function () {
    const signupButton = document.querySelector(".signup-enter");
    const usernameInput = document.querySelector("input[type='Username']");
    const emailInput = document.querySelector("input[type='Email']");
    const passwordInput = document.querySelector("input[type='Password']");
    const retypePasswordInput = document.querySelector("input[type='Retype']");
    const loginButton = document.querySelector(".signup-button");
    const guestButton = document.querySelector(".signup-button1");

    signupButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission for custom handling

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const retypePassword = retypePasswordInput.value;

        if (!username || !email || !password || !retypePassword) {
            alert("Please fill in all fields.");
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password !== retypePassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // If all validations pass, redirect to the welcome page or log the user in.
        alert("Sign-up successful!");
        // Redirect or call server-side code here
    });

    // Set up navigation for login and guest buttons
    loginButton.addEventListener("click", function () {
        window.location.href = "guestlog.html";
    });

    guestButton.addEventListener("click", function () {
        window.location.href = "guestlog.html";
    });
});
