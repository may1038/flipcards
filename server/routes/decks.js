const express = require("express")
const router = express.Router()
const models = require("../models")
const bcrypt = require("bcryptjs")

router.get("/decks", function(req, res) {
  models.decks.findAll(function(decks) {
    res.json(decks)
  })
})

router.post("/decks", function(req, res) {
  const newDeck = model.decks.build({
    topic: req.body.topic
  })
  newDeck.save().then(function() {
    res.json({ success: true })
  })
})

module.exports = router
