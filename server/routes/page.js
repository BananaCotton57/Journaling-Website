const express = require("express")
const Page = require("../models/page")
const router = express.Router()

router.get('/getPages', async (req, res) => {
  try {
    const pages = await Page.getAllJournalPages()
    res.send(pages)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.post('/createPage', async (req, res) => {
  try {
    const page = await Page.createPage(req.body)
    res.send({...page})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

module.exports = router