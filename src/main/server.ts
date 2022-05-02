import 'module-alias/register'
import { MongoHelper } from '@/infra/db/mongo-helper'
import { app } from './app'
import { env } from './config/env'

const port = env.port

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    app.listen(port, () => console.log('server is running'))
  })
  .catch(console.error)
