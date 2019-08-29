const express = require("express")
const router = express.Router()
const path = require("path")

router.get("/", (request, response, next) => {
  response.sendFile(path.join(__dirname, "../", "views", "shop.html"))
})

module.exports = router