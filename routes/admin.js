const express = require("express")
const router = express.Router()
const products = []

router.get("/add-product", (request, response, next) => {
	// we use path.join() here so our website is delivered on windows AND linux/unix based systems - it essentially adds the / or \ for us. __dirname is the directory of our current .js file so in this case it is "routes/". We then add "../" to ensure we can access the "views" folder since it is a SIBLING folder
	response.render("add-product", {
		layout: false,
		pageTitle: "Admin: Add Products to Your Store"
	})
})

router.post("/add-product", (request, response, next) => {
	products.push({
		productName: request.body.productName,
		productPrice: request.body.productPrice,
		productDescription: request.body.productDescription
	})
	response.redirect("/")
})

module.exports = { routes: router, products: products }
