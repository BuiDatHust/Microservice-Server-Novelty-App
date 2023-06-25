const Joi = require('joi')
const { USER_TYPES } = require('../../entities/users')

const CreateUserDto = Joi.object().keys({
  full_name: Joi.string(),
  username: Joi.string().required(),
  type: Joi.string().valid(...USER_TYPES),
  dob: Joi.date().required(),
  avatar: Joi.string(),
  background: Joi.string(),
  bio: Joi.string(),
  instargram_link: Joi.string(),
  is_free_plan: Joi.boolean(),
  country_code: Joi.string().required(),
  phone_number: Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

module.exports = CreateUserDto
