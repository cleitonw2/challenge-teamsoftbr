import { HttpResponse } from './protocol'

export const serverError = (serverError: Error): HttpResponse => ({
  statusCode: 500,
  body: {
    error: 'Internal server error: ' + serverError.message,
    stack: serverError.stack
  }
})

export const badRequest = (error: string): HttpResponse => ({
  statusCode: 400,
  body: {
    error
  }
})

export const forbidden = (error: string): HttpResponse => ({
  statusCode: 403,
  body: {
    error
  }
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const ok = (body: any): HttpResponse => ({
  statusCode: 200,
  body
})
