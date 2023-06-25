const { sequelize } = require('../initializers/sequelize')
const { BioImg } = require('../models/bioImgs')
const { Bio } = require('../models/bios')

class BiosService {
  async createBio(user_id, data) {
    const { bioImgs } = data
    delete data.bioImgs
    const [bio, created] = await Bio.findOrCreate({
      where: { user_id },
      defaults: data,
    })
    if (!created && bioImgs.length) {
      const bioImgAttributes = bioImgs.map((bioImg) => {
        return {
          bio_id: bio.id,
          url: bioImg.url,
        }
      })

      await BioImg.bulkCreate(bioImgAttributes)
    }

    return bio
  }

  async updateBio(id, data) {
    const bio = await Bio.findByPk(+id)
    if (!bio) {
      return bio
    }
    await bio.update(data)

    const { newBioImgs } = data
    if (newBioImgs.length) {
      await Promise.allSettled(
        newBioImgs.map((bioImg) => {
          return BioImg.upsert({...bioImg, bio_id: id})
        })
      )
    }
    return bio
  }

  async getBio(id) {
    return Bio.scope([{ method: 'withBioImg' }]).findByPk(+id)
  }
}

module.exports = new BiosService()
