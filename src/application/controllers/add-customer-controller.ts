import { Address, Customer } from '@/domain/entities'
import { AddAddressUseCase, AddCustomerUseCase } from '@/domain/usecases'
import { Validation } from '../validations'
import { Controller } from './controller'
import { badRequest, forbidden, noContent } from './helper'
import { HttpResponse } from './protocol'

type Request = {
  customer: Customer
  addresses: Address[]
}

export class AddCustomerController extends Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addCustomer: AddCustomerUseCase,
    private readonly addAddress: AddAddressUseCase
  ) {
    super()
  }

  async perform (request: Request): Promise<HttpResponse> {
    const error = this.validation.validate(request)
    if (error) return badRequest(error)
    const isSuccess = await this.addCustomer(request.customer)
    if (!isSuccess) return forbidden('cliente já foi cadastrado!')
    for (const address of request.addresses) {
      const isSuccess = await this.addAddress({ ...address, customerCnpj: request.customer.cnpj })
      if (!isSuccess) return forbidden('endereço já foi cadastrado!')
    }
    return noContent()
  }
}
