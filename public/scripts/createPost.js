let postForm = document.getElementById("postForm")

if (postForm) postForm.addEventListener(`submit`, Post)

function Post(e){
    e.preventDefault();

    const journalPage = {
        //title: title,
        content: document.getElementById("post-create").value
    }

    console.log(journalPage)

    console.log("created journal entry :)")
}