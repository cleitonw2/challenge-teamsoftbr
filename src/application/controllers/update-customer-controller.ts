import { Customer } from '@/domain/entities'
import { UpdateCustomerUseCase } from '@/domain/usecases'
import { Validation } from '../validations'
import { Controller } from './controller'
import { badRequest, noContent } from './helper'
import { HttpResponse } from './protocol'

type Request = {
  customer: Customer
}

export class UpdateCustomerController extends Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updateCustomer: UpdateCustomerUseCase
  ) {
    super()
  }

  async perform (request: Request): Promise<HttpResponse> {
    const error = this.validation.validate(request)
    if (error) return badRequest(error)
    this.updateCustomer(request.customer)
    return noContent()
  }
}
