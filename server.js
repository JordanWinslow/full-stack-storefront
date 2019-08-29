const express = require("express")
const bodyParser = require("body-parser")

const adminRoutes = require("./routes/admin")
const userRoutes = require("./routes/users")

const PORT = 3000
const server = express()

// --------------------------------- //

server.use(bodyParser.urlencoded({ extended: false }))
server.use(adminRoutes)
server.use(userRoutes)

server.listen(PORT)
