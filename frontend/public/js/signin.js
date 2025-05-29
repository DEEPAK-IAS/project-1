
const form = document.forms[0];
const signInBTN = document.getElementById("submit");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");


form.reset();
console.log(document.forms)


function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.textContent = "🙈";
  } else {
    passwordInput.type = "password";
    toggleIcon.textContent = "👁️";
  }
}
signInBTN.addEventListener("click", async (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  try {
  const response = await fetch("http://localhost:3000/auth/signin", {
    method: "POST",
    headers : {
      "Content-Type": "application/json"
    },
    body : JSON.stringify({
      email : email,
      password : password
    })
  })
  const data = await response.json();
  console.log(data)
  } catch(err) {
    console.log(err);
  }
})

