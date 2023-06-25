const multer = require('multer')

const memoryStorage = multer.memoryStorage()

const withoutSavingUploader = multer({ storage: memoryStorage })

const uploaderMiddleware = {
  withoutSavingUploader,
}

module.exports = uploaderMiddleware
