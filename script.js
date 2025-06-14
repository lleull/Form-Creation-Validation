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
    let messages = [];

    // Get all form input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate username
    const usernameError = validateUsername(username);
    if (usernameError) {
      isValid = false;
      messages.push(usernameError);
    }

    // Validate password
    const passwordError = validatePassword(password);
    if (passwordError) {
      isValid = false;
      messages.push(passwordError);
    }

    // Validate email
    const emailError = validateEmail(email);
    if (emailError) {
      isValid = false;
      messages.push(emailError);
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
      feedbackDiv.innerHTML = messages.join("<br>");
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
      messages: messages
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
document.addEventListener("DOMContentLoaded", () => {
  // Form Selection
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Form Submission Event Listener
  form.addEventListener("submit", (event) => {
    // Prevent default form submission
    event.preventDefault();

    // Initialize validation variables
    let isValid = true;
    let messages = [];

    // Retrieve and trim user inputs
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long");
    }

    // Email Validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address");
    }

    // Password Validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long");
    }

    // Display Feedback
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
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
      feedbackDiv.style.backgroundColor = "#f8d7da";
      feedbackDiv.style.border = "1px solid #f5c6cb";
    }

    // Log form data for debugging
    console.log("Form Data:", {
      username: username,
      email: email,
      password: password,
      isValid: isValid,
      messages: messages
    });
  });
});
