import { Router } from 'express'
import { makeAddCustomerController } from '../factories/controllers'

const customerRoutes = Router()

customerRoutes.post('/', async (req, res) => {
  const request = {
    ...req.body
  }
  const controller = makeAddCustomerController()
  const httpResponse = await controller.handle(request)
  return res.status(httpResponse.statusCode).json(httpResponse.body)
})

export { customerRoutes }
