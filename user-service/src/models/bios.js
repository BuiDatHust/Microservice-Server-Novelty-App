const { Model } = require('sequelize')
const { sequelize } = require('../initializers/sequelize')
const { BioEntity } = require('../entities/bios')
const { BioImg } = require('./bioImgs')

const BIO_TABLE_NAME = 'bios'
class Bio extends Model {
  static associate(models) {
    Bio.hasMany(models.BioImg, {
      as: 'bioImgs',
      foreignKey: 'bio_id',
    })
  }
}

const scopes = {
  byUserId(user_id) {
    return {
      where: { user_id },
    }
  },
  withBioImg() {
    return {
      include: [{ model: BioImg, as: 'bioImgs' }],
    }
  },
}

Bio.init(BioEntity, { sequelize: sequelize, modelName: BIO_TABLE_NAME, scopes })

module.exports = { Bio, BIO_TABLE_NAME }
