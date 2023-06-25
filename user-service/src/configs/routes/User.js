const {Router} = require('express')
const { dtoValidationMiddleware } = require('../../middlewares/dto')
const CreateUserDto = require('../../dtos/user/create-user-dto')
const UpdateUserDto = require('../../dtos/user/update-user-dto')
const { UsersController } = require('../../controllers')
const UserRouter = Router()

UserRouter.post('', dtoValidationMiddleware(CreateUserDto, 'body'), UsersController.create)
UserRouter.get('/:id', UsersController.getSingleUser)
UserRouter.put('/', dtoValidationMiddleware(UpdateUserDto, 'body'), UsersController.update)

module.exports = UserRouter