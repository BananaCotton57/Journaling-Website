
let registerForm = document.getElementById("registerForm") 

if (registerForm) registerForm.addEventListener('submit', register)

console.log(registerForm)

function register(e){
    e.preventDefault()

    console.log("Register Function Ran!!!")
}