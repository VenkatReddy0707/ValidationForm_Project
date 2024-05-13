// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Fetching form values
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(element => element.textContent = '');
  
    // Validation conditions
    let isValid = true;
  
    if (fullName.length < 5) {
      document.getElementById('fullNameError').textContent = 'Name must be at least 5 characters long.';
      isValid = false;
    }
  
    if (!email.includes('@')) {
      document.getElementById('emailError').textContent = 'Enter a valid email address.';
      isValid = false;
    }
  
    if (phone.length !== 10 || phone === '123456789') {
      document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number.';
      isValid = false;
    }
  
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
      document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and not be "password" or your name.';
      isValid = false;
    }
  
    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
      isValid = false;
    }
  
    // If all conditions are met, submit the form
    if (isValid) {
      document.getElementById('registrationForm').submit();
    }
  }
  
  // Event listener for form submission
  document.getElementById('registrationForm').addEventListener('submit', validateForm);
  