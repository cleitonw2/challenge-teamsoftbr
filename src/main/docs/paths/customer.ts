export const customerPath = {
  get: {
    tags: ['Clientes'],
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
                customer: {
                  type: 'object',
                  $ref: '#/schemas/customer'
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
    tags: ['Clientes'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              customer: {
                type: 'object',
                $ref: '#/schemas/customer'
              },
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
    tags: ['Clientes'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              customer: {
                type: 'object',
                $ref: '#/schemas/customer'
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
    tags: ['Clientes'],
    parameters: [{
      in: 'query',
      name: 'cnpj',
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
