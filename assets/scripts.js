// Footer: set current year
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }

  // Very simple "demo" behaviour for login form
  const loginForm = document.getElementById("login-form");
  const loginMessage = document.getElementById("login-message");

  if (loginForm && loginMessage) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = loginForm.elements["username"].value.trim();

      if (username.length === 0) {
        loginMessage.textContent = "Please enter your username to continue.";
      } else {
        loginMessage.textContent =
          "Welcome, " +
          username +
          "! (Demo login – no real authentication is performed.)";
      }
    });
  }
});