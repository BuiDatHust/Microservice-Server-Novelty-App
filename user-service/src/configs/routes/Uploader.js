const {Router} = require('express')
const { UploaderController } = require('../../controllers')
const UploaderRouter = Router()

UploaderRouter.post('/image', UploaderController.uploadImage)

module.exports = UploaderRouter