document.addEventListener("DOMContentLoaded", function () {
  const button = document.createElement("button");
  button.innerText = "Read Autobiography";
  button.style.position = "fixed";
  button.style.top = "20px";
  button.style.right = "200px";
  button.style.padding = "10px";
  button.style.backgroundColor = "#007BFF";
  button.style.color = "white";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.borderRadius = "5px";
  
  document.body.appendChild(button);

  button.addEventListener("click", function () {
      const section = document.getElementById("autobiography");
      if (section) {
          section.scrollIntoView({ behavior: "smooth" });
      }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const button = document.createElement("button");
  button.innerText = "Home";
  button.style.position = "fixed";
  button.style.top = "20px";
  button.style.right = "370px";
  button.style.padding = "10px";
  button.style.backgroundColor = "#007BFF";
  button.style.color = "white";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.borderRadius = "5px";
  
  document.body.appendChild(button);

  button.addEventListener("click", function () {
      const section = document.getElementById("home");
      if (section) {
          section.scrollIntoView({ behavior: "smooth" });
      }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const button = document.createElement("button");
  button.innerText = "About";
  button.style.position = "fixed";
  button.style.top = "20px";
  button.style.right = "120px";
  button.style.padding = "10px";
  button.style.backgroundColor = "#007BFF";
  button.style.color = "white";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.borderRadius = "5px";
  
  document.body.appendChild(button);

  button.addEventListener("click", function () {
      const section = document.getElementById("about");
      if (section) {
          section.scrollIntoView({ behavior: "smooth" });
      }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const button = document.createElement("button");
  button.innerText = "Comment";
  button.style.position = "fixed";
  button.style.top = "20px";
  button.style.right = "20px";
  button.style.padding = "10px";
  button.style.backgroundColor = "#007BFF";
  button.style.color = "white";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.borderRadius = "5px";
  
  document.body.appendChild(button);

  button.addEventListener("click", function () {
      const section = document.getElementById("form");
      if (section) {
          section.scrollIntoView({ behavior: "smooth" });
      }
  });
});