const { DataTypes } = require("sequelize")

const BioEntity = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  instagram_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  facebook_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  youtube_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  wikipedia_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
}

module.exports = { BioEntity }
