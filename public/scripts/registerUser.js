//will move all of this to a singular user.js script (which will be loginUser.js)
//and then i will delete this thing

import { fetchData } from "./main.js"

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
        // email: document.getElementById("email").value, (I did not decide to include this in my database)
        password: document.getElementById("password").value,
        // dateCreated: new Date() (Completely forgot this attribute in my ERD oops)
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