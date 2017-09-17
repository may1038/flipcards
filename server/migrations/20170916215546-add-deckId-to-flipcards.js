"use strict"

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn("flipcards", "deckId", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "decks",
        key: "id"
      }
    })
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn("flipcards", "deckId")
  }
}
