const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")
app.use(express.static("public"))
app.use(bodyParser.json())

const route = require("./routes/mainroute")
app.use(route)

app.listen(3000, function(req, res) {
  console.log("Flipcard is listening")
})
