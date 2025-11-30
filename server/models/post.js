const posts = [
  {
    postId: 12345,
    title: "Title",
    content: "im the best",
    dateCreated: "February"
  },
  {
    postId: 55555,
    title: "Spiderman the Best",
    content: "I really love Spiderman",
    dateCreated: "March"
  }
]

// READ for grabbing all posts
function getAllPosts() {
  return posts
}

module.exports = { getAllPosts }