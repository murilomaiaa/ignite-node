import { Router } from 'express'

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService.ts'

const specificationsRoutes = Router()
const specificationsRepository = new SpecificationsRepository()

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body

  const createSpecification = new CreateSpecificationService(specificationsRepository)

  const specification = createSpecification.execute({ name, description })

  return response.status(201).json(specification)
})

export { specificationsRoutes }