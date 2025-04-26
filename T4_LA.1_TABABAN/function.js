const roles = ["department_head", "faculty", "student_officer", "student"];
const passwords = ["siEsD3ptH34D", "SiEsF4cu1ty", "#CSSO_Ako", "3SapatNa!"];

function authentication(userRole, userPassword) {
  const index = roles.indexOf(userRole);

  if (index !== -1 && passwords[index] === userPassword) {
    console.log(`Access granted for ${userRole}`);
    alert("gora na.\nclick ok");
    
    window.location.href = "sumakses.html"; 
  } else {
    console.log("Access denied. Invalid role or password.");
    alert("Wrong role or password bes! ulitin mo!");
  }
}


document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const roleInput = document.getElementById("role").value.trim();
  const passwordInput = document.getElementById("password").value.trim();

  authentication(roleInput, passwordInput);
});
