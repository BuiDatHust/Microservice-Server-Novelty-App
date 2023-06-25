const { User } = require('../models/users')

class UserService {
  async createUser(data) {
    const result = await User.create(data)
    // call to auth service to gen access and refresh token to user sign in
    return result
  }

  async getOneById(id) {
    return User.scope([{ method: ['byId', id] }]).findOne()
  }

  async updateUserById(id, data) {
    const user = await User.scope([{ method: ['byId', id] }]).findOne()
    await user.update(data)
    return user
  }
}

module.exports = new UserService()
