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

.put('/editTitle', (req, res) => {
  try {
    const page = Page.editPageTitle(req.body)
    res.send({...page})
  } catch (err) {
    res.status(401).send({message: err.message})
  }
})

.delete('/delete', (req, res) => {
  try {
    Page.deletePage(req.body.PageID)
    res.send({success: "Goodbye page :("})
  } catch (err){
    res.status(401).send({message: err.message})
  }
})

module.exports = router