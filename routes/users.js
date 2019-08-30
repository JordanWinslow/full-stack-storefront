const express = require("express")
const router = express.Router()
const path = require("../util/customPathHelper")

// __dirname is /routes and ".." tells us to go back one level. We could say ../ but .. is a better habit to get into since it works universally on windows or linux/mac
router.get("/", (request, response, next) => {
  response.sendFile(path("views", "shop.html"))
})

module.exports = router