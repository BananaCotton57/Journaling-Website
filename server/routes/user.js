const express = require("express")
const User = require("../models/user")
const router = express.Router()

router

.get('/getUsers', async (req, res) => {
  try {
    const users = await User.getAllUsers()
    res.send(users)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.post('/register', async (req, res) => {
  try {
    const user = await User.register(req.body)
    res.send({...user, Password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.post('/login', async (req, res) => {
  try {
    const user = await User.login(req.body)
    res.send({...user, Password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.put('/edit', (req, res) => {
  try {
    const user = User.editUser(req.body)
    res.send({...user, Password: undefined})
  } catch (err) {
    res.status(401).send({message: err.message})
  }
})

.delete('/delete', (req, res) => {
  try {
    User.deleteUser(req.body.UserID)
    res.send({success: "Goodbye"})
  } catch (err){
    res.status(401).send({message: err.message})
  }
})

module.exports = router