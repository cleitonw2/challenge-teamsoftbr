import { Router } from 'express'
import {
  makeAddAddressController,
  makeUpdateAddressController,
  makeLoadAddressesController,
  makeDeleteAddressController
} from '../factories/controllers'

const addressRoutes = Router()

addressRoutes.get('/', async (req, res) => {
  const request = {
    ...req.query
  }
  const controller = makeLoadAddressesController()
  const httpResponse = await controller.handle(request)
  return res.status(httpResponse.statusCode).json(httpResponse.body)
})

addressRoutes.post('/', async (req, res) => {
  const request = {
    ...req.body
  }
  const controller = makeAddAddressController()
  const httpResponse = await controller.handle(request)
  return res.status(httpResponse.statusCode).json(httpResponse.body)
})

addressRoutes.put('/', async (req, res) => {
  const request = {
    ...req.body
  }
  const controller = makeUpdateAddressController()
  const httpResponse = await controller.handle(request)
  return res.status(httpResponse.statusCode).json(httpResponse.body)
})

addressRoutes.delete('/', async (req, res) => {
  const request = {
    ...req.query
  }
  const controller = makeDeleteAddressController()
  const httpResponse = await controller.handle(request)
  return res.status(httpResponse.statusCode).json(httpResponse.body)
})

export { addressRoutes }
