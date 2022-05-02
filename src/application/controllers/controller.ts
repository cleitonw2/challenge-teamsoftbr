import { serverError } from './helper'
import { HttpResponse } from './protocol'

export abstract class Controller {
  abstract perform (request: any): Promise<HttpResponse>

  async handle (request: any): Promise<HttpResponse> {
    try {
      return await this.perform(request)
    } catch (error) {
      return serverError(error)
    }
  }
}
