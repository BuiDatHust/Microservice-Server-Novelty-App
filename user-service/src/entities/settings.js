const { DataTypes } = require('sequelize')

const SettingEntity = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  audio_quality: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  quality_download: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  cache_size: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  address_download: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  is_show_friend_active: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
}

module.exports = { SettingEntity }
