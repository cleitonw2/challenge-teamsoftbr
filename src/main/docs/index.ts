import components from './components'
import schemas from './schemas'
import paths from './paths'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Api de Cadastro de Clientes',
    description: 'Documentação da api',
    version: '1.0.0',
    contact: {
      name: 'Cleiton',
      email: 'cleitonwoycik@outlook.com'
    }
  },
  servers: [{
    url: '/'
  }],
  tags: [{
    name: 'Endereço'
  }, {
    name: 'Clientes'
  }],
  paths,
  schemas,
  components
}
