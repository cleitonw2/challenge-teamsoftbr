import { Address } from '@/domain/entities'
import { UpdateAddressUseCase } from '@/domain/usecases'
import { Validation } from '../validations'
import { Controller } from './controller'
import { badRequest, noContent } from './helper'
import { HttpResponse } from './protocol'

type Request = {
  address: Address
}

export class UpdateAddressController extends Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updateAddress: UpdateAddressUseCase
  ) {
    super()
  }

  async perform (request: Request): Promise<HttpResponse> {
    const error = this.validation.validate({
      address: [request.address]
    })
    if (error) return badRequest(error)
    this.updateAddress(request.address)
    return noContent()
  }
}
