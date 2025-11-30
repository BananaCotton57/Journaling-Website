let loginForm = document.getElementById("loginForm")

if(loginForm) loginForm.addEventListener('submit', login)

function login(e){
    e.preventDefault()

    const user = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        //dateCreated: new Date().toLocaleDateString() (doesn't make sense for login. might get it from database)
    }

    console.log(user);

    console.log("wow u logged in!!!!")
}