const Joi = require('joi')

const UpdateUserDto = Joi.object().keys({
  id: Joi.number().required(),
  full_name: Joi.string(),
  username: Joi.string(),
  dob: Joi.date(),
  avatar: Joi.string(),
  background: Joi.string(),
  bio: Joi.string(),
  instargram_link: Joi.string(),
  country_code: Joi.string(),
  phone_number: Joi.string(),
  email: Joi.string().email(),
})

module.exports = UpdateUserDto
