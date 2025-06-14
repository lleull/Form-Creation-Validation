// document.addEventListener("DOMContentLoaded", () => {
//   // Select the registration form
//   const form = document.getElementById("registration-form");

//   // Select the feedback division
//   const feedbackDiv = document.getElementById("form-feedback");

//   // Log the form element to verify selection
//   console.log("Form element:", form);
//   console.log("Feedback div:", feedbackDiv);

//   // Add submit event listener to the form
//   form.addEventListener("submit", (event) => {
//     // Prevent the default form submission
//     event.preventDefault();

//     // Log that the form was submitted
//     console.log("Form submitted");

//     // You can add your form handling logic here
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  console.log("ASD", form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;
    let errorMessages = [];

    // Get all form input values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validation checks
    if (username.length < 3) {
      isValid = false;
      errorMessages.push("Username must be at least 3 characters long");
    }
    if (password.length < 8) {
      isValid = false;
      errorMessages.push("Password must be at least 8 characters long");
    }
    if (!email.includes("@")) {
      isValid = false;
      errorMessages.push("Email must contain '@' symbol");
    }

    // Make feedback div visible
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
      feedbackDiv.style.backgroundColor = "#d4edda";
    } else {
      feedbackDiv.innerHTML = errorMessages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
      feedbackDiv.style.backgroundColor = "#f8d7da";
    }

    // Log the form data
    console.log("Form Data:", {
      username: username,
      email: email,
      password: password,
    });

    // You can also get all form data using FormData
    const formData = new FormData(event.target);
    console.log("FormData entries:");
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  });
  console.log("feedbackDiv", feedbackDiv);
});
