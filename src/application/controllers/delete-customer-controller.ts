import { DeleteCustomerUseCase } from '@/domain/usecases'
import { Validation } from '../validations'
import { Controller } from './controller'
import { badRequest, noContent } from './helper'
import { HttpResponse } from './protocol'

type Request = {
  cnpj: string
}

export class DeleteCustomerController extends Controller {
  constructor (
    private readonly validation: Validation,
    private readonly deletCustomer: DeleteCustomerUseCase
  ) {
    super()
  }

  async perform (request: Request): Promise<HttpResponse> {
    const error = this.validation.validate({
      customer: request
    })
    if (error) return badRequest(error)
    await this.deletCustomer(request.cnpj)
    return noContent()
  }
}
