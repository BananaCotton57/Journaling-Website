const con = require("./db_connect")

async function createJournalPageTable() {
  let sql = `
    CREATE TABLE IF NOT EXISTS Page (
      PageID INT NOT NULL AUTO_INCREMENT,
      Title VARCHAR(255) DEFAULT 'Untitled',
      Content TEXT,
      UserID INT NOT NULL,
      CONSTRAINT pagePK PRIMARY KEY(pageID),
      CONSTRAINT userFK FOREIGN KEY(UserID) REFERENCES User(UserID)
    );
  `
  await con.query(sql)
}

async function createMoodTable() {
  let sql = `
    CREATE TABLE IF NOT EXISTS Mood (
      MoodID INT NOT NULL AUTO_INCREMENT,
      Mood VARCHAR(255),
      PageID INT NOT NULL,
      CONSTRAINT moodPK PRIMARY KEY(MoodID),
      CONSTRAINT moodPageFK FOREIGN KEY(PageID) REFERENCES Page(PageID)
    );
  `
  await con.query(sql)
}

async function createTagTable() {
  let sql = `
    CREATE TABLE IF NOT EXISTS Tag (
      TagID INT NOT NULL AUTO_INCREMENT,
      Tag VARCHAR(255),
      PageID INT NOT NULL,
      CONSTRAINT tagPK PRIMARY KEY(TagID),
      CONSTRAINT tagPageFK FOREIGN KEY(PageID) REFERENCES Page(PageID)
    );
  `
  await con.query(sql)
}

createJournalPageTable()
createMoodTable()
createTagTable()

async function getAllJournalPages() {
  let sql = `
    SELECT * FROM Page;
  `
  return await con.query(sql)
}

//I have no idea if ill use this
async function pageExists(page) {
  let sql = `
      SELECT * FROM Page
      WHERE PageID="${page.PageID}"
  `
  let currentPage = await con.query(sql)
  return currentPage[0]
}

async function createPage(page) {
  let sql = `
    INSERT INTO Page(Title, Content, UserID)
    VALUES("${page.Title}", "${page.Content}", "${page.UserID}")
  `  
  await con.query(sql)

  console.log("Page Created!")
}

async function editPageTitle(page) {
  const sql = `UPDATE Page SET Title = "${page.Title}" WHERE PageID = ${page.PageID}`

  await con.query(sql)
}

async function deletePage(pageId) {
  const sql = `DELETE FROM Page WHERE PageId = ${pageId}`

  await con.query(sql)
}

//I have no idea if ill use this
async function getAllMoods() {
  let sql = `
    SELECT * FROM Mood;
  `
  return await con.query(sql)
}

//I have no idea if ill use this
async function getAllTags() {
  let sql = `
    SELECT * FROM Tag;
  `
  return await con.query(sql)
}

module.exports = { getAllJournalPages, getAllMoods, getAllTags, createPage, editPageTitle, deletePage }