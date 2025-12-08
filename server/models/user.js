const con = require("./db_connect")

async function createUserTable() {
  let sql = `
    CREATE TABLE IF NOT EXISTS User (
      UserID INT NOT NULL AUTO_INCREMENT,
      Username VARCHAR(255) NOT NULL UNIQUE,
      Password VARCHAR(255) NOT NULL,
      CONSTRAINT userPK PRIMARY KEY(userID)
    );
  `
  await con.query(sql)
}

createUserTable()

async function userExists(user) {
  let sql = `
      SELECT * FROM User
      WHERE Username="${user.Username}"
  `
  let currentUser = await con.query(sql)
  return currentUser[0]
}

async function getAllUsers() {
  let sql = `
    SELECT * FROM User;
  `
  return await con.query(sql)
}

async function register(user) {
  let currentUser = await userExists(user)
  if(currentUser) throw Error("Username already in use!")
  
  let sql = `
    INSERT INTO User(Username, Password)
    VALUES("${user.Username}", "${user.Password}")
  `  
  await con.query(sql)

  return await userExists(user)
}

async function editUser(user) {
  const sql = `UPDATE User SET Username = "${user.Username}" WHERE UserId = ${user.UserID}`

  await con.query(sql)
}

async function deleteUser(userId) {
  const sql = `DELETE FROM User WHERE UserId = ${userId}`

  await con.query(sql)
}

module.exports = { getAllUsers, register, editUser, deleteUser }