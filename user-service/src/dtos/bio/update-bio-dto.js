const Joi = require('joi')

const bioImg = Joi.object().keys({
  id: Joi.number(),
  url: Joi.string().required(),
})

const UpdateBioDto = Joi.object().keys({
  id: Joi.number().required(),
  description: Joi.string(),
  instagram_link: Joi.string(),
  facebook_link: Joi.string(),
  youtube_link: Joi.string(),
  wikipedia_link: Joi.string(),
  newBioImgs: Joi.array().items(bioImg),
})

module.exports = UpdateBioDto
