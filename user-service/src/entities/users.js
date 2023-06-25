const { DataTypes } = require('sequelize')

const ANONYMOUS_TYPE = 'anonymous'
const ARTIST_TYPE = 'artists'
const AUDIENCE_TYPE = 'audience'
const RECORD_OWNER_TYPE = 'recordingOwner'
const USER_TYPES = [
  ANONYMOUS_TYPE,
  ARTIST_TYPE,
  AUDIENCE_TYPE,
  RECORD_OWNER_TYPE,
]

const UserEntity = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM({ values: USER_TYPES }),
    defaultValue: ANONYMOUS_TYPE,
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  background: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  instargram_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  is_free_plan: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  country_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
}

module.exports = {
  UserEntity,
  ANONYMOUS_TYPE,
  ARTIST_TYPE,
  AUDIENCE_TYPE,
  RECORD_OWNER_TYPE,
  USER_TYPES,
}
