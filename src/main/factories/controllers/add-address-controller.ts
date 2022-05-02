import { AddAddressController } from '@/application/controllers'
import { Controller } from '@/application/controllers/controller'
import { Validation, AddressValidation, ValidationComposite } from '@/application/validations'
import { makeAddAddressUseCase } from '../usecases'

const makeValidation = (): Validation => {
  const validations: any[] = []
  const addressValidation = new AddressValidation(
    'address',
    ['publicPlace', 'addressNumber', 'district', 'city', 'state', 'cep', 'customerCnpj'],
    [
      ['publicPlace', ''],
      ['addressNumber', 1],
      ['complement', ''],
      ['district', ''],
      ['city', ''],
      ['state', ''],
      ['cep', ''],
      ['customerCnpj', '']
    ]
  )
  validations.push(addressValidation)
  return new ValidationComposite(validations)
}

export const makeAddAddressController = (): Controller => {
  return new AddAddressController(
    makeValidation(),
    makeAddAddressUseCase()
  )
}
