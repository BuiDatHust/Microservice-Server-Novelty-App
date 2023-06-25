const Joi = require('joi')

const bioImg = Joi.object().keys({
  url: Joi.string().required(),
})

const CreateBioDto = Joi.object().keys({
  user_id: Joi.number().required(),
  description: Joi.string(),
  instagram_link: Joi.string(),
  facebook_link: Joi.string(),
  youtube_link: Joi.string(),
  wikipedia_link: Joi.string(),
  bioImgs: Joi.array().items(bioImg),
})

module.exports = CreateBioDto
