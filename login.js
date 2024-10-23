document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("exampleInputPassword1");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      const correctUsername = "admin"; 
      const correctPassword = "password123"; 
  
      if (username === correctUsername && password === correctPassword) {
        alert("Login successfully!");
      } else {
        alert("Incorrect username or password. Please try again.");
      }
  
      form.reset();
    });
  
  });
  
  