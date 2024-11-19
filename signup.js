document.addEventListener("DOMContentLoaded", function () {
    const signupButton = document.querySelector(".signup-enter");
    const loginButton = document.querySelector(".signup-button");
    const guestButton = document.querySelector(".signup-button1");
    const usernameInput = document.querySelector("#username-input");
    const emailInput = document.querySelector("#email-input");
    const passwordInput = document.querySelector("#password-input");
    const retypePasswordInput = document.querySelector("#retype-password-input");

    signupButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default form submission

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const retypePassword = retypePasswordInput.value;

        // Validation
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

        // Save the data to localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Sign-up successful! You can now log in.");
        window.location.href = "login.html"; // Redirect to login page
    });

    loginButton.addEventListener("click", function () {
        window.location.href = "logPage.html";
    });

    guestButton.addEventListener("click", function () {
        window.location.href = "guestlog.html";
    });
});
