function enterGuest() {
    const guestNameInput = document.getElementById('guestName').value.trim();
    if (guestNameInput) {
        const guestDisplayName = `${guestNameInput}(Guest)`;
        localStorage.setItem('loggedInUser', guestDisplayName);
        window.location.href = 'index.html';
    } else {
        alert("Please enter a name to continue as a guest.");
    }
}
//Note: This code was the same as the index.js code and was conflicting with it since they did the same thing