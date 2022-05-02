import { Router } from 'express'
import { makeController } from './factories/controllers'

const routes = Router()

routes.post('/customer', async (req, res) => {
  const request = {
    ...req.body
  }
  const controller = makeController()
  const httpResponse = await controller.handle(request)
  return res.status(httpResponse.statusCode).json(httpResponse.body)
})

export { routes }
