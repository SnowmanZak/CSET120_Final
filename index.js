document.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');
    const usernameDisplay = document.getElementById('username-display');
    usernameDisplay.style.marginRight="100px"

    localStorage.removeItem('cartItems')
    localStorage.removeItem('discountCode')

   
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
     
        usernameDisplay.textContent = loggedInUser;
        usernameDisplay.style.display = 'inline';
        loginLink.style.display = 'none';
        signupLink.style.display = 'none';
    }

   
    usernameDisplay.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        location.reload(); 
    });
});
