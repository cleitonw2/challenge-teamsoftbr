import { UpdateCustomerController } from '@/application/controllers'
import { Controller } from '@/application/controllers/controller'
import { Validation, ValidationComposite, CustomerValidation } from '@/application/validations'
import { makeUpdateCustomerUseCase } from '../usecases'

const makeValidation = (): Validation => {
  const validations: any[] = []
  const customerValidation = new CustomerValidation(
    'customer',
    ['cnpj', 'corporateName', 'contactName', 'phone'],
    [['cnpj', ''], ['corporateName', ''], ['contactName', ''], ['phone', '']]
  )
  validations.push(customerValidation)
  return new ValidationComposite(validations)
}

export const makeUpdateCustomerController = (): Controller => {
  return new UpdateCustomerController(
    makeValidation(),
    makeUpdateCustomerUseCase()
  )
}
