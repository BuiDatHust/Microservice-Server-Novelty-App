const Joi = require('joi')
const dotenv = require('dotenv')
dotenv.config()

const registerEnv = () => {
  const envSchema = Joi.object()
    .keys({
      NODE_ENV: Joi.string()
        .valid(...['development', 'production'])
        .required(),
      PORT: Joi.number().required(),
      SENTRY_DSN: Joi.string().required(),
      DB_HOST: Joi.string().required(),
      DB_NAME: Joi.string().required(),
      DB_PORT: Joi.number().positive().required(),
      DB_USERNAME: Joi.string().required(),
      DB_PASSWORD: Joi.string().required(),
      GRPC_SONG_SERVICE_HOST: Joi.string().required(),
      GRPC_SONG_SERVICE_PORT: Joi.number().required(),
      GRPC_SERVER_HOST: Joi.string().required(),
      GRPC_SERVER_PORT: Joi.number().required(),
      MINIO_ACCESS_KEY: Joi.string().required(),
      MINIO_SECRET_KEY: Joi.string().required(),
      MINIO_HOST: Joi.string().required(),
      MINIO_PORT: Joi.number().required(),
      MINIO_BUCKET_NAME: Joi.string().required(),
    })
    .unknown()

  const { error } = envSchema
    .prefs({ errors: { label: 'key' } })
    .validate(process.env)

  if (error) {
    throw new Error(`Config validation error: ${error.message}`)
  }
}

module.exports = registerEnv
