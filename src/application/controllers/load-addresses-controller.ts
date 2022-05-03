import { LoadAddressesUseCase } from '@/domain/usecases'
import { Validation } from '../validations'
import { Controller } from './controller'
import { badRequest, ok } from './helper'
import { HttpResponse } from './protocol'

type Request = {
  cnpj: string
}

export class LoadAddressesController extends Controller {
  constructor (
    private readonly validation: Validation,
    private readonly loadAddresses: LoadAddressesUseCase
  ) {
    super()
  }

  async perform (request: Request): Promise<HttpResponse> {
    const error = this.validation.validate({
      customer: request
    })
    if (error) return badRequest(error)
    const addresses = await this.loadAddresses(request.cnpj)
    return ok({ addresses })
  }
}
