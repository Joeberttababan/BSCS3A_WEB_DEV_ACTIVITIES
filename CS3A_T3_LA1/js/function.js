document.addEventListener("DOMContentLoaded", function () {
  // Sign-Up Form
  const signUpForm = document.getElementById("signUpForm");
  if (signUpForm) {
      signUpForm.addEventListener("submit", function (event) {
          event.preventDefault();
          signUp();
      });
  }

  // Login Form
  const loginForm = document.getElementById("logInForm");
  if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
          event.preventDefault();
          logIn();
      });
  }
});

let users = JSON.parse(localStorage.getItem("users")) || [];

function signUp() {
  const username = document.getElementById("signUpUsername").value.trim();
  const password = document.getElementById("signUpPassword").value.trim();

  if (users.some(user => user.username === username)) {
      alert("Username already exists!");
      return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  
  alert("Sign-Up Successful! You can now log in.");
  window.location.href = "LoggedIn.html";
}

function logIn() {
  const username = document.getElementById("logInUsername").value.trim();
  const password = document.getElementById("logInPassword").value.trim();

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
      localStorage.setItem("loggedInUser", username);
      alert("Login Successful!");
      window.location.href = "dashboard.html";
  } else {
      alert("Invalid username or password!");
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
