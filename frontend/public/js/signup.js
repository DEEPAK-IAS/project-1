const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const phoneInput = document.getElementById("phone")
const signUpBTN = document.getElementById("submit")

const form = document.querySelector(".signup-form");
form.reset();
async function signUp(e) {

  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const phone = phoneInput.value.trim();

  console.log(phone);

  const response = await fetch("http://localhost:3000/auth/signup",{
    method: "POST",
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      phone: phone
    })
  });

  const data = await response.json();

  if(data.statusCode == 200) {
    location.href = "/page/signin"
  }
  else {
    alert(data.message)
  }

}

signUpBTN.addEventListener("click",signUp)