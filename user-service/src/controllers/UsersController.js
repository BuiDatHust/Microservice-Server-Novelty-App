const { NoData } = require('../libs/errors')
const { sendError, sendSuccess } = require('../libs/response')
const {UserService} = require('../services')

class UsersController {
  async create(req, res) {
    try {
      const userDto = req.body
      const user = await UserService.createUser(userDto)
      sendSuccess(res, user)
    } catch (error) {
      sendError(res, 500, error.message, error)
    }
  }

  async getSingleUser(req, res) {
    try {
      const { id } = req.params
      console.log(this)
      const user = await UserService.getOneById(id)

      sendSuccess(res, user)
    } catch (error) {
      sendError(res, 500, error.message, error)
    }
  }

  async update(req, res) {
    try {
      const updateDto = req.body
      const { id } = updateDto
      delete updateDto.id
      const user = await UserService.updateUserById(id, updateDto)
      if (!user) {
        sendSuccess(res, NoData)
      }

      sendSuccess(res, {})
    } catch (error) {
      sendError(res, 500, error.message, error)
    }
  }
}

module.exports = new UsersController()
