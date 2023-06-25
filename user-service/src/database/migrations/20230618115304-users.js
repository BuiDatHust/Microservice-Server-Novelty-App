'use strict'

const { USER_TYPES, ANONYMOUS_TYPE } = require("../../entities/users")
const { USER_TABLE_NAME } = require("../../models/users")

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(USER_TABLE_NAME, {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      full_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM({ values: USER_TYPES }),
        defaultValue: ANONYMOUS_TYPE,
      },
      dob: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      avatar: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      background: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      bio: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      instargram_link: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      is_free_plan: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true,
      },
      country_code: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.DataTypes.STRING,
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
    await queryInterface.dropTable(USER_TABLE_NAME)
  },
}
