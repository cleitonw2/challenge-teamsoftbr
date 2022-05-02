import { Router } from 'express'
import { makeAddCustomerController } from '../factories/controllers'
import { makeDeleteCustomerController } from '../factories/controllers/delete-customer-controller'
import { makeLoadCustomerController } from '../factories/controllers/load-customer-controller'

const customerRoutes = Router()

customerRoutes.post('/', async (req, res) => {
  const request = {
    ...req.body
  }
  const controller = makeAddCustomerController()
  const httpResponse = await controller.handle(request)
  return res.status(httpResponse.statusCode).json(httpResponse.body)
})

customerRoutes.get('/', async (req, res) => {
  const request = {
    ...req.query
  }
  const controller = makeLoadCustomerController()
  const httpResponse = await controller.handle(request)
  return res.status(httpResponse.statusCode).json(httpResponse.body)
})

customerRoutes.delete('/', async (req, res) => {
  const request = {
    ...req.query
  }
  const controller = makeDeleteCustomerController()
  const httpResponse = await controller.handle(request)
  return res.status(httpResponse.statusCode).json(httpResponse.body)
})

export { customerRoutes }
