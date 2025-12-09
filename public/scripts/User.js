import { fetchData } from "./main.js"

let loginForm = document.getElementById("loginForm")
if(loginForm) loginForm.addEventListener('submit', login)

function login(e){
    e.preventDefault()

    const user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    }

     fetchData("/users/login", user, "POST")
      .then(data => {
        if(!data.message) {
        setCurrentUser(data)
        window.location.href = "post.html"
        console.log("wow u logged in!!!!")
        }
      })
      .catch(err => {
        console.log("An error occurred : " + err)
        //let errorSection = document.getElementById("error")
        //errorSection.innerText = err.message
      })

}

//register stuff
let registerForm = document.getElementById("registerForm") 
if (registerForm) registerForm.addEventListener('submit', register)

console.log(registerForm)

function register(e){
    e.preventDefault()

    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("password_confirm").value

  if(validPassword(password, confirmPassword)){
    const user = {
        username: document.getElementById("username").value,
        // email: document.getElementById("email").value, (I did not decide to include this in my database)
        password: document.getElementById("password").value,
        // dateCreated: new Date() (Completely forgot this attribute in my ERD oops)
    }
    fetchData("/users/register", user, "POST")
      .then(data => {
        if(!data.message) {
        console.log("congrats u have registered into this weird site")
        }
      })
      .catch(err => {
        console.log("An error occurred : " + err)
        //let errorSection = document.getElementById("error")
        //errorSection.innerText = err.message
      })
  } else {
      console.log("Your passwords don't match!!!!!!! :(")
  }

}

function validPassword(password, confirmPassword){
    if(password === confirmPassword) return true
}

// local storage functions
export function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user))
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'))
}
// example accessing userId for second entity
// let currentUser = getCurrentUser()
// let userId = currentUser.userId

export function removeCurrentUser() {
  localStorage.removeItem('user')
  window.location.href = "index.html"
}