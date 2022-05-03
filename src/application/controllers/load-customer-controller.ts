import { LoadCustomerUseCase } from '@/domain/usecases'
import { Validation } from '../validations'
import { Controller } from './controller'
import { badRequest, ok } from './helper'
import { HttpResponse } from './protocol'

type Request = {
  cnpj: string
}

export class LoadCustomerController extends Controller {
  constructor (
    private readonly validation: Validation,
    private readonly loadCustomer: LoadCustomerUseCase
  ) {
    super()
  }

  async perform (request: Request): Promise<HttpResponse> {
    const error = this.validation.validate({
      customer: request
    })
    if (error) return badRequest(error)
    const customer = await this.loadCustomer(request.cnpj)
    return ok({ customer })
  }
}
