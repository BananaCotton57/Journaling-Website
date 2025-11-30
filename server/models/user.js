// Pseudo database. Will add MySQL tables later.
const users = [
  {
    userId: 12345,
    userName: "cathy123",
    password: "icecream"
  },
  {
    userId: 55555,
    userName: "bobbi",
    password: "badpasswd"
  }
]

// CRUD Operation
// READ for grabbing all users
function getAllUsers() {
  // if (users.length == 0) {
  //   throw Error("No users to send over!!")
  // }
  return users
}

module.exports = { getAllUsers }