const { DataTypes } = require('sequelize')

const BANNER_TYPE = 'banner'
const AUDIO_TYPE = 'audio'
const ADS_TYPE = [BANNER_TYPE, AUDIO_TYPE]

const SettingAdsEntity = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM({ values: ADS_TYPE }),
    default: BANNER_TYPE,
  },
  play_list_id: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  is_display_ads: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  country_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  audio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  banner_url: {
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

module.exports = { SettingAdsEntity }
