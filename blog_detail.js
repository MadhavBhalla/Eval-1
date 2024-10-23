const likeButton = document.querySelector('.like-btn');
const likeCountElement = document.querySelector('.like-count');


console.log(likeButton, likeCountElement); 


likeButton.addEventListener('click', function() {
  
    console.log('Like button clicked!');

    let currentLikes = parseInt(likeCountElement.textContent); 
    likeCountElement.textContent = currentLikes + 1; 

    console.log('Updated likes:', likeCountElement.textContent);
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const commentInput = form.querySelector('textarea');
    const submitButton = form.querySelector('button[type="submit"]');
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
  
     
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const comment = commentInput.value.trim();
  
     
      if (name === "" || email === "" || comment === "") {
        alert("Please fill out all fields before submitting. Retry.");
      } else {
        alert("Comment posted successfully!");
        form.reset();
      }
    });
  });
  


