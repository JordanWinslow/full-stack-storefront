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
server.use((request, response, next) => {
  response
    .status(404)
    .send(
      "<title>404 - Page not Found</title><h1>404 - Page Not Found</h1><p><a href='/'>Click Here</a> to return to the home page.</p>"
    )
})
server.listen(PORT)
