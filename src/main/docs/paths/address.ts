export const addressPath = {
  get: {
    tags: ['Endereço'],
    parameters: [{
      in: 'query',
      name: 'cnpj',
      schema: {
        type: 'string'
      }
    }],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                addresses: {
                  type: 'array',
                  items: {
                    type: 'object',
                    $ref: '#/schemas/address'
                  }
                }
              }
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  },
  post: {
    tags: ['Endereço'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              address: {
                type: 'object',
                $ref: '#/schemas/address'
              }
            }
          }
        }
      }
    },
    responses: {
      204: {
        description: 'no content'
      },
      400: {
        $ref: '#/components/badRequest'
      },
      403: {
        $ref: '#/components/forbidden'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  },
  put: {
    tags: ['Endereço'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              address: {
                type: 'object',
                $ref: '#/schemas/address'
              }
            }
          }
        }
      }
    },
    responses: {
      204: {
        description: 'no content'
      },
      400: {
        $ref: '#/components/badRequest'
      },
      403: {
        $ref: '#/components/forbidden'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  },
  delete: {
    tags: ['Endereço'],
    parameters: [{
      in: 'query',
      name: 'cnpj',
      schema: {
        type: 'string'
      }
    }, {
      in: 'query',
      name: 'cep',
      schema: {
        type: 'string'
      }
    }, {
      in: 'query',
      name: 'addressNumber',
      schema: {
        type: 'string'
      }
    }],
    responses: {
      204: {
        description: 'no content'
      },
      400: {
        $ref: '#/components/badRequest'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
