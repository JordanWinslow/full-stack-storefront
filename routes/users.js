const express = require("express")
const router = express.Router()

router.get("/", (request, response, next) => {
  response.send(
    '<h1>Demo Store Homepage!</h1><p><a href="/add-product">Click Here</a> to see express.js routing in action! (note the output will appear in console this time)</p>'
  )
})

module.exports = router
