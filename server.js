const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const adminRoutes = require("./routes/admin")
const userRoutes = require("./routes/users")

const PORT = 3000
const server = express()

// --------------------------------- //

server.use(bodyParser.urlencoded({ extended: false }))
server.use("/admin", adminRoutes)
server.use(userRoutes)
server.use((request, response, next) => {
	response.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})
server.listen(PORT)
