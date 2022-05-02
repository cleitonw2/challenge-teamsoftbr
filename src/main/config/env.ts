import 'dotenv/config'

export const env = {
  mongoUrl: process.env.MONGO_URL,
  port: process.env.PORT || 3000,
  url: process.env.URL || 'https://brasilapi.com.br/api/cep/v2/'
}
