import express from 'express'
import { addressRoutes, customerRoutes } from './routes'

const app = express()

app.use(express.json())

app.use('/customer', customerRoutes)
app.use('/address', addressRoutes)

export { app }
