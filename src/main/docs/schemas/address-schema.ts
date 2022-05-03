export const addressSchema = {
  type: 'object',
  properties: {
    publicPlace: {
      type: 'string'
    },
    addressNumber: {
      type: 'integer'
    },
    complement: {
      type: 'string'
    },
    district: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    cep: {
      type: 'string'
    },
    customerCnpj: {
      type: 'string'
    },
    latitude: {
      type: 'string'
    },
    longitude: {
      type: 'string'
    }
  }
}
