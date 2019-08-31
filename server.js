const express = require("express")
const bodyParser = require("body-parser")
const path = require("./util/customPathHelper")
const expressHbs = require("express-handlebars")

const adminData = require("./routes/admin")
const userRoutes = require("./routes/users")

const PORT = 3000
const server = express()

// call the engine whatever we like in the engine() declaration, but then we must use that name in the set() declaration. This also determines the extension of our template files. So if we write "hbs" then it is .hbs and "handlebars" then it is .handlebars.
server.engine("hbs", expressHbs())
server.set("view engine", "hbs")

// --------------------------------- //
server.use(bodyParser.urlencoded({ extended: false }))
server.use(express.static(path("public")))
server.use("/admin", adminData.routes)
server.use(userRoutes)
server.use((request, response, next) => {
	response
		.status(404)
		.render("404", { layout: false, pageTitle: "Whoops! 404 - Page Not Found" })
})
server.listen(PORT)
