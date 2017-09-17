const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")
app.use(express.static("public"))
app.use(bodyParser.json())

const loginRoute = require("./routes/login")
app.use(loginRoute)

const cardsRoute = require("./routes/cards")
app.use(cardsRoute)

const decksRoute = require("./routes/decks")
app.use(decksRoute)

const usersRoute = require("./routes/users")
app.use(usersRoute)

app.listen(3000, function(req, res) {
  console.log("Flipcard is listening")
})
