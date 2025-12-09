import { getCurrentUser } from "./User.js";
import { fetchData } from "./main.js";

let postForm = document.getElementById("postForm")
if (postForm) postForm.addEventListener(`submit`, Post)

let user = getCurrentUser()

function Post(e){
    e.preventDefault();

    const journalPage = {
        title: document.getElementById("post-title").value,
        content: document.getElementById("post-create").value,
        // dateCreated: new Date() (did not put an attribute for this in my database :C)
        UserID: user.UserID
    }

    //console.log(journalPage)

    //console.log("created journal entry :)")
    fetchData("/pages/createPage", journalPage, "POST")
      .then(data => {
      if(!data.message) {
      console.log("new page yay")
      console.log(data)
      }
    })
    .catch(err => {
      console.log("An error occurred : " + err)
      //let errorSection = document.getElementById("error")
      //errorSection.innerText = err.message
    })
}