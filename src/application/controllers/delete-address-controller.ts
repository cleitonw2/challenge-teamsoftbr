import { DeleteAddressUseCase } from '@/domain/usecases'
import { Validation } from '../validations'
import { Controller } from './controller'
import { badRequest, noContent } from './helper'
import { HttpResponse } from './protocol'

type Request = {
  cnpj: string
  cep: string
  addressNumber: string
}

export class DeleteAddressController extends Controller {
  constructor (
    private readonly validation: Validation,
    private readonly deleteAddress: DeleteAddressUseCase
  ) {
    super()
  }

  async perform (request: Request): Promise<HttpResponse> {
    const { cnpj, cep, addressNumber } = request
    const error = this.validation.validate({
      customer: {
        cep,
        cnpj,
        addressNumber: +addressNumber
      }
    })
    if (error) return badRequest(error)
    await this.deleteAddress(cnpj, cep, +addressNumber)
    return noContent()
  }
}
