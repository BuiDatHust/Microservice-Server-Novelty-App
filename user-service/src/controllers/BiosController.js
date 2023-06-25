const { NoData } = require('../libs/errors')
const { sendSuccess, sendError } = require('../libs/response')
const { BiosService } = require('../services')

class BiosController {
  async create(req, res) {
    try {
      const bioDto = req.body
      const { user_id } = bioDto
      const bio = await BiosService.createBio(user_id, bioDto)

      sendSuccess(res, { bio })
    } catch (error) {
      sendError(res, 500, error.message, error)
    }
  }

  async update(req, res) {
    try {
      const bioDto = req.body
      const { id } = bioDto
      delete bioDto.id
      const bio = await BiosService.updateBio(id, bioDto)

      sendSuccess(res, { bio })
    } catch (error) {
      sendError(res, 500, error.message, error)
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params
      const bio = await BiosService.getBio(id)
      if (!bio) {
        return sendError(res, 404, NoData)
      }

      sendSuccess(res, { bio })
    } catch (error) {
      sendError(res, 500, error.message, error)
    }
  }
}

module.exports = new BiosController()
