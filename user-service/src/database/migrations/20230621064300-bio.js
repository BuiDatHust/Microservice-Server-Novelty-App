'use strict'

const { BIO_TABLE_NAME } = require('../../models/bios')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(BIO_TABLE_NAME, {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      instagram_link: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      facebook_link: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      youtube_link: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      wikipedia_link: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable(BIO_TABLE_NAME)
  },
}
