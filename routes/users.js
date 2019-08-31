const express = require("express")
const router = express.Router()
const adminData = require("../routes/admin")
const products = adminData.products

// __dirname is /routes and ".." tells us to go back one level. We could say ../ but .. is a better habit to get into since it works universally on windows or linux/mac
router.get("/", (request, response, next) => {
  response.render("shop", {
    pageTitle: "Full-Stack Storefront | Shop",
    hasProducts: products.length > 0,
    products: products,
    activeShop: true,
    productCSS: true
  })
})

module.exports = router
