const express = require("express")
const router = express.Router()

router.get("/add-product", (request, response, next) => {
  response.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="productName"><button type="submit">Add Product</form>'
  )
})

router.post("/add-product", (request, response, next) => {
  console.log(request.body)
  response.redirect("/")
})

module.exports = router
