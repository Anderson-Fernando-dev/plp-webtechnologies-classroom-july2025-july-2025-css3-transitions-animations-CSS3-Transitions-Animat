/* 
  script.js
  Demonstrates:
  - Scope
  - Parameters and Return Values
  - DOM Manipulation
  - Event Handling
  - Animation Triggers
*/

// ===== Form Validation Logic =====
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

// Function with parameters and return value
function validateForm(username, age) {
  if (!username || username.length < 3) {
    return "❌ Username must be at least 3 characters long.";
  }
  if (age < 18) {
    return "❌ You must be at least 18 years old.";
  }
  return "✅ Form submitted successfully!";
}

// Event listener with function scope
signupForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent reload
  const username = document.getElementById("username").value;
  const age = parseInt(document.getElementById("age").value);

  const result = validateForm(username, age); // Call function with parameters
  formMessage.textContent = result;
});

// ===== Animation Trigger Logic =====
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

animateBtn.addEventListener("click", function() {
  // Trigger CSS animation dynamically
  box.style.animation = "moveBox 2s ease-in-out";
  
  // Reset animation after completion (scope handling)
  setTimeout(() => {
    box.style.animation = "";
  }, 2000);
});

// ===== Modal Logic =====
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

// Open modal
openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if clicked outside
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
