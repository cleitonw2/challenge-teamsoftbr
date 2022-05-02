import { LoadCustomerController } from '@/application/controllers'
import { Controller } from '@/application/controllers/controller'
import { CustomerValidation, Validation, ValidationComposite } from '@/application/validations'
import { makeLoadCustomerUseCase } from '../usecases'

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

export const makeLoadCustomerController = (): Controller => {
  return new LoadCustomerController(makeValidation(), makeLoadCustomerUseCase())
}
