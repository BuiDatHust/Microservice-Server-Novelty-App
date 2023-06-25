const { DataTypes } = require('sequelize')

const ADMIN_PERMISSION = 'admin'
const EDITOR_PERMISSION = 'editor'
const READER_PERMISSION = 'reader'
const ARTIST_TYPE_PERMISSION = [
  ADMIN_PERMISSION,
  EDITOR_PERMISSION,
  READER_PERMISSION,
]

const ArtistManagerEntity = {
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
  artist_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  permission: {
    type: DataTypes.ENUM({ values: ARTIST_TYPE_PERMISSION }),
    default: READER_PERMISSION,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
}

module.exports = {
  ArtistManagerEntity,
  ADMIN_PERMISSION,
  EDITOR_PERMISSION,
  READER_PERMISSION,
  ARTIST_TYPE_PERMISSION,
}
