const filterButtons = document.querySelectorAll('.filter-btn');
const menuDrinks = document.getElementById('Drinks');
const menuFood = document.getElementById('Foods');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        if (filterValue === 'all') {
            menuDrinks.style.display = 'block';
            menuFood.style.display = 'block';
        } else if (filterValue === 'drinks') {
            menuDrinks.style.display = 'block';
            menuFood.style.display = 'none';
        } else if (filterValue === 'food') {
            menuDrinks.style.display = 'none';
            menuFood.style.display = 'block';
        }
    });
});