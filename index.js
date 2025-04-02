// DOM Elements
const body = document.body;
const formContainer = document.getElementById("formContainer");
const welcomeText = document.getElementById("welcomeText");
const accountPrompt = document.getElementById("accountPrompt");
const switchBtn = document.getElementById("switchBtn");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const forgotForm = document.getElementById("forgotForm");
const forgotPasswordLink = document.getElementById("forgotPasswordLink");
const backToLogin = document.getElementById("backToLogin");

// Toggle password visibility
document.querySelectorAll(".toggle-password").forEach((icon) => {
  icon.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const input = document.getElementById(targetId);
    const type =
      input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
});

// Form Handlers
loginForm.addEventListener("submit", function (e) {
  console.log("Login form submitted");
});

signupForm.addEventListener("submit", function (e) {
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    e.preventDefault();
  }
});

forgotForm.addEventListener("submit", function (e) {
  console.log("Forgot password form submitted");
});

// Forgot Password Link Handler
forgotPasswordLink.addEventListener("click", function (e) {
  e.preventDefault();
  loginForm.classList.remove("visible");
  loginForm.classList.add("hidden");

  setTimeout(() => {
    forgotForm.classList.remove("hidden");
    forgotForm.classList.add("visible");
  }, 300);
});

// Back to Login Handler
backToLogin.addEventListener("click", function (e) {
  e.preventDefault();
  forgotForm.classList.remove("visible");
  forgotForm.classList.add("hidden");

  setTimeout(() => {
    loginForm.classList.remove("hidden");
    loginForm.classList.add("visible");
  }, 300);
});

// Switch between Login/Signup Forms
function toggleForms() {
  const isSignup = formContainer.classList.contains("switch-to-signup");

  // Hide all forms first
  loginForm.classList.remove("visible");
  loginForm.classList.add("hidden");
  signupForm.classList.remove("visible");
  signupForm.classList.add("hidden");
  forgotForm.classList.remove("visible");
  forgotForm.classList.add("hidden");

  // Toggle the main container class
  formContainer.classList.toggle("switch-to-signup");
  body.classList.toggle("switch-to-signup");

  // Update left panel content
  if (isSignup) {
    welcomeText.textContent = "Welcome Back!";
    accountPrompt.textContent = "Already have an account?";
    switchBtn.textContent = "Sign In";
  } else {
    welcomeText.textContent = "Hello, Welcome!";
    accountPrompt.textContent = "Don't have an account?";
    switchBtn.textContent = "Register";
  }

  // Show correct form
  setTimeout(() => {
    if (isSignup) {
      loginForm.classList.remove("hidden");
      loginForm.classList.add("visible");
    } else {
      signupForm.classList.remove("hidden");
      signupForm.classList.add("visible");
    }
  }, 300);
}

// Event listener for switch button
switchBtn.addEventListener("click", toggleForms);
