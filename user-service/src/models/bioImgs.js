const { Model } = require('sequelize')
const { sequelize } = require('../initializers/sequelize')
const { BioImgEntity } = require('../entities/bioImgs')

const BIO_IMG_TABLE_NAME = 'bio_imgs'

class BioImg extends Model {}

BioImg.init(BioImgEntity, {
  sequelize: sequelize,
  modelName: BIO_IMG_TABLE_NAME,
})

module.exports = { BioImg, BIO_IMG_TABLE_NAME }
