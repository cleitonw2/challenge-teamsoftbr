import { AddCustomerController } from '@/application/controllers'
import { Controller } from '@/application/controllers/controller'
import { Validation, AddressValidation, ValidationComposite, CustomerValidation } from '@/application/validations'
import { makeAddAddressUseCase, makeAddCustomerUseCase } from '../usecases'

const makeValidation = (): Validation => {
  const validations: any[] = []
  const customerValidation = new CustomerValidation(
    'customer',
    ['cnpj', 'corporateName', 'contactName', 'phone'],
    [['cnpj', ''], ['corporateName', ''], ['contactName', ''], ['phone', '']]
  )
  const addressValidation = new AddressValidation(
    'addresses',
    ['publicPlace', 'addressNumber', 'district', 'city', 'state', 'cep'],
    [['publicPlace', ''], ['addressNumber', 1], ['district', ''], ['city', ''], ['state', ''], ['cep', '']]
  )
  validations.push(customerValidation, addressValidation)
  return new ValidationComposite(validations)
}

export const makeController = (): Controller => {
  return new AddCustomerController(
    makeValidation(),
    makeAddCustomerUseCase(),
    makeAddAddressUseCase()
  )
}
