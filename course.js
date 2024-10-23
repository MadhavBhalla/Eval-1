// JavaScript to handle Buy button clicks
document.addEventListener("DOMContentLoaded", function () {
    // Select all Buy buttons
    const buyButtons = document.querySelectorAll('.btn-primary');

    // Add click event listeners to each button
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor action

            // Get the title of the clicked card
            const cardTitle = this.closest('.card').querySelector('.card-title').innerText;
            
            // Show an alert with the product information
            alert(`You clicked to buy: ${cardTitle}`);
        });
    });
});
