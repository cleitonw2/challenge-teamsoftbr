import { Router } from 'express'
import {
  makeAddCustomerController,
  makeUpdateCustomerController,
  makeDeleteCustomerController,
  makeLoadCustomerController
} from '../factories/controllers'

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

customerRoutes.put('/', async (req, res) => {
  const request = {
    ...req.body
  }
  const controller = makeUpdateCustomerController()
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
