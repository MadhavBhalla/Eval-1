// Get the form element
const contactForm = document.getElementById('contactForm');

// Add event listener to handle form submission
contactForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Get the form field values
  const firstName = document.getElementById('firstName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Log the form data to the console (or handle submission here)
  console.log('Form Data Submitted:', {
    firstName,
    email,
    phone,
    message
  });

  // Optionally reset the form fields after submission
  contactForm.reset();

  // Optionally, show a success message to the user
  alert('Thank you for your query! We will get back to you shortly.');
});
