
document.addEventListener("DOMContentLoaded", function () {
  
    const buyButtons = document.querySelectorAll('.btn-primary');

    buyButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            const cardTitle = this.closest('.card').querySelector('.card-title').innerText;
       
            alert(`You clicked to buy: ${cardTitle}`);
        });
    });
});
