const { Model, Sequelize } = require('sequelize')
const { sequelize } = require('../initializers/sequelize')
const { UserEntity } = require('../entities/users')

const USER_TABLE_NAME = 'users'

class User extends Model {
  static associate(models) {
    User.hasOne(models.Bio, {
      as: 'bioUser',
      foreignKey: 'user_id',
    })
  }
}

const scopes = {
  byId(id) {
    return {
      where: { id },
    }
  },
  bySortOrder(sortBy, sortOrder) {
    return {
      order: [[Sequelize.literal(sortBy), sortOrder]],
    }
  },
}

User.init(UserEntity, {
  sequelize: sequelize,
  modelName: USER_TABLE_NAME,
  scopes,
})

module.exports = { User, USER_TABLE_NAME }
