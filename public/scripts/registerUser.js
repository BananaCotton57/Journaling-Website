
let registerForm = document.getElementById("registerForm") 

if (registerForm) registerForm.addEventListener('submit', register)

console.log(registerForm)

function register(e){
    e.preventDefault()

    password = document.getElementById("password").value
    confirmPassword = document.getElementById("password_confirm").value

    if(validPassword(password, confirmPassword)){

    const user = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    console.log("Register Function Ran!!!")
    console.log(user);

    } else {
        console.log("Your passwords don't match!!!!!!! :(")
    }
}

function validPassword(password, confirmPassword){
    if(password === confirmPassword) return true
}