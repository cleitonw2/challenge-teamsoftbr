import { Address } from '@/domain/entities'
import { AddAddressUseCase, CheckCustomerUseCase } from '@/domain/usecases'
import { Validation } from '../validations'
import { Controller } from './controller'
import { badRequest, forbidden, noContent } from './helper'
import { HttpResponse } from './protocol'

type Request = {
  address: Address
}

export class AddAddressController extends Controller {
  constructor (
    private readonly validation: Validation,
    private readonly checkCustomer: CheckCustomerUseCase,
    private readonly addAddress: AddAddressUseCase
  ) {
    super()
  }

  async perform (request: Request): Promise<HttpResponse> {
    const error = this.validation.validate({
      address: [request.address]
    })
    if (error) return badRequest(error)
    const checkCnpj = await this.checkCustomer(request.address.customerCnpj)
    if (!checkCnpj) return forbidden('esse cliente ainda não foi cadastrado!')
    const isSuccess = await this.addAddress(request.address)
    if (!isSuccess) return forbidden('endereço já foi cadastrado!')
    return noContent()
  }
}
