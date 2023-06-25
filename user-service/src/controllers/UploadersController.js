const { sendSuccess, sendError } = require('../libs/response')
const { uploadImage } = require('../libs/uploadMedia')

class UploaderController {
  async uploadImage(req, res) {
    try {
      const { files } = req
      const urls = await Promise.all(files.map((file) => uploadImage(file)))
      sendSuccess(res, urls)
    } catch (error) {
      console.log(error)
      sendError(res, error?.code || 500, error.message, error)
    }
  }
}

module.exports = new UploaderController()
