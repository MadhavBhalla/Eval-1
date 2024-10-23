document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("form");
    const emailInput = document.getElementById("Email");
    const passwordInput = document.getElementById("exampleInputPassword1");
    const confirmPasswordInput = document.getElementById("pwd");
  
    function isValidEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailPattern.test(email);
    }
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
  
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
  
      if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }
  
      alert("Signed up successfully!!");
  
      form.reset();
    });
  
  });
  