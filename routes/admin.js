const express = require("express")
const router = express.Router()
const path = require("../util/customPathHelper")


router.get("/add-product", (request, response, next) => {
  // we use path.join() here so our website is delivered on windows AND linux/unix based systems - it essentially adds the / or \ for us. __dirname is the directory of our current .js file so in this case it is "routes/". We then add "../" to ensure we can access the "views" folder since it is a SIBLING folder
	response.sendFile(path("views", "add-product.html"))
})

router.post("/add-product", (request, response, next) => {
	console.log(request.body)
	response.redirect("/")
})

module.exports = router
