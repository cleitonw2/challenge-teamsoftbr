import { Router } from 'express'
import { makeAddAddressController } from '../factories/controllers'

const addressRoutes = Router()

addressRoutes.post('/', async (req, res) => {
  const request = {
    ...req.body
  }
  const controller = makeAddAddressController()
  const httpResponse = await controller.handle(request)
  return res.status(httpResponse.statusCode).json(httpResponse.body)
})

export { addressRoutes }
