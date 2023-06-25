const { DataTypes } = require('sequelize')
const { PAID, APPROVED, UNPAID, CANCELED } = require('../models/userSubscriptions')

const UserSubscriptionEntity = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  subscription_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  expire_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM([PAID, APPROVED, UNPAID,CANCELED ]),
    default: UNPAID,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
}

module.exports = { UserSubscriptionEntity }
