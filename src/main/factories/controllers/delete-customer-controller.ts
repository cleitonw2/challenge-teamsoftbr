import { DeleteCustomerController } from '@/application/controllers'
import { Controller } from '@/application/controllers/controller'
import { CustomerValidation, Validation, ValidationComposite } from '@/application/validations'
import { makeDeleteCustomerUseCase } from '../usecases'

const makeValidation = (): Validation => {
  const validations: any[] = []
  const customerValidation = new CustomerValidation(
    'customer',
    ['cnpj'],
    [['cnpj', '']]
  )
  validations.push(customerValidation)
  return new ValidationComposite(validations)
}

export const makeDeleteCustomerController = (): Controller => {
  return new DeleteCustomerController(makeValidation(), makeDeleteCustomerUseCase())
}
