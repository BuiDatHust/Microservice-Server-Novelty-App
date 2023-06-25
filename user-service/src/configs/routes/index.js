const { Router } = require('express')
const UploaderRouter = require('./Uploader')
const UserRouter = require('./User')
const uploaderMiddleware = require('../../middlewares/uploaders')
const BioRouter = require('./Bio')
const routes = Router()

routes.use(
  '/upload',
  uploaderMiddleware.withoutSavingUploader.any(),
  UploaderRouter
)
routes.use('/user', UserRouter)
routes.use('/bio', BioRouter)

module.exports = routes
