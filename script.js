function initializeForm() {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  console.log("ASD", form);

  // Function to validate username
  function validateUsername(username) {
    if (username.trim() === "") {
      return "Username cannot be empty";
    }
    if (username.length < 3) {
      return "Username must be at least 3 characters long";
    }
    if (username.length > 20) {
      return "Username cannot exceed 20 characters";
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      return "Username can only contain letters, numbers, and underscores";
    }
    return "";
  }

  // Function to validate password
  function validatePassword(password) {
    if (password.trim() === "") {
      return "Password cannot be empty";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number";
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return "Password must contain at least one special character (!@#$%^&*)";
    }
    return "";
  }

  // Function to validate email
  function validateEmail(email) {
    if (email.trim() === "") {
      return "Email cannot be empty";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;
    let errorMessages = [];

    // Get all form input values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validate username
    const usernameError = validateUsername(username);
    if (usernameError) {
      isValid = false;
      errorMessages.push(usernameError);
    }

    // Validate password
    const passwordError = validatePassword(password);
    if (passwordError) {
      isValid = false;
      errorMessages.push(passwordError);
    }

    // Validate email
    const emailError = validateEmail(email);
    if (emailError) {
      isValid = false;
      errorMessages.push(emailError);
    }

    // Make feedback div visible and set its style
    feedbackDiv.style.display = "block";
    feedbackDiv.style.padding = "10px";
    feedbackDiv.style.borderRadius = "4px";
    feedbackDiv.style.marginTop = "10px";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
      feedbackDiv.style.backgroundColor = "#d4edda";
      feedbackDiv.style.border = "1px solid #c3e6cb";
    } else {
      feedbackDiv.innerHTML = errorMessages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
      feedbackDiv.style.backgroundColor = "#f8d7da";
      feedbackDiv.style.border = "1px solid #f5c6cb";
    }

    // Log the form data
    console.log("Form Data:", {
      username: username,
      email: email,
      password: password,
      isValid: isValid,
      errors: errorMessages
    });

    // You can also get all form data using FormData
    const formData = new FormData(event.target);
    console.log("FormData entries:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  });
  console.log("feedbackDiv", feedbackDiv);
}

// Wait for DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", initializeForm);
