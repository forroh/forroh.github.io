const LoginInput = document.querySelector("#login-form input");
const Loginbtn = document.querySelector("#login-form button");

function loginbtnclick() {
    console.log("Hello", LoginInput.value);
}

Loginbtn.addEventListener("click", loginbtnclick);
