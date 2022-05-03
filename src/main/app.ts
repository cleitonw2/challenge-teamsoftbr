import express from 'express'
import { addressRoutes, customerRoutes } from './routes'
import swaggerStup from './config/swagger'

const app = express()

app.use(express.json())

swaggerStup(app)

app.use('/customer', customerRoutes)
app.use('/address', addressRoutes)

export { app }
