let postForm = document.getElementById("postForm")

if (postForm) postForm.addEventListener(`submit`, Post)

function Post(e){
    e.preventDefault();

    const journalPage = {
        title: document.getElementById("post-title").value,
        content: document.getElementById("post-create").value,
        dateCreated: new Date().toLocaleDateString(),
        timeCreated: new Date().toLocaleTimeString()
    }

    console.log(journalPage)

    console.log("created journal entry :)")
}