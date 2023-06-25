const { Router } = require('express')
const { BiosController } = require('../../controllers')
const { dtoValidationMiddleware } = require('../../middlewares/dto')
const CreateBioDto = require('../../dtos/bio/create-bio-dto')
const UpdateBioDto = require('../../dtos/bio/update-bio-dto')
const BioRouter = Router()

BioRouter.get('/:id', BiosController.show)
BioRouter.post(
  '',
  dtoValidationMiddleware(CreateBioDto, 'body'),
  BiosController.create
)
BioRouter.put(
  '',
  dtoValidationMiddleware(UpdateBioDto, 'body'),
  BiosController.update
)

module.exports = BioRouter
