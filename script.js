// JavaScript for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
  
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Show an alert with the form data (for demonstration purposes)
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  
    // Reset the form
    this.reset();
  });
  