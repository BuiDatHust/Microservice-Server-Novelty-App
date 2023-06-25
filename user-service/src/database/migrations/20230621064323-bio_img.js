'use strict'

const { BIO_IMG_TABLE_NAME } = require('../../models/bioImgs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(BIO_IMG_TABLE_NAME, {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      url: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      bio_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
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
    return queryInterface.dropTable(BIO_IMG_TABLE_NAME)
  },
}
