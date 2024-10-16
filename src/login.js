document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const loginToggle = document.getElementById("loginToggle");
  const signupToggle = document.getElementById("signupToggle");

  loginToggle.addEventListener("click", function () {
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
    loginToggle.classList.add("active");
    signupToggle.classList.remove("active");
  });

  signupToggle.addEventListener("click", function () {
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
    signupToggle.classList.add("active");
    loginToggle.classList.remove("active");
  });

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Тут можна додати логіку для входу
    console.log("Login attempt");
  });

  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Тут можна додати логіку для реєстрації
    console.log("Signup attempt");
  });
});
