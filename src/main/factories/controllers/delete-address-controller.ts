import { DeleteAddressController } from '@/application/controllers'
import { Controller } from '@/application/controllers/controller'
import { CustomerValidation, Validation, ValidationComposite } from '@/application/validations'
import { makeDeleteAddressUseCase } from '../usecases'

const makeValidation = (): Validation => {
  const validations: any[] = []
  const customerValidation = new CustomerValidation(
    'customer',
    ['cnpj', 'cep', 'addressNumber'],
    [['cnpj', ''], ['cep', ''], ['addressNumber', 1]]
  )
  validations.push(customerValidation)
  return new ValidationComposite(validations)
}

export const makeDeleteAddressController = (): Controller => {
  return new DeleteAddressController(makeValidation(), makeDeleteAddressUseCase())
}
