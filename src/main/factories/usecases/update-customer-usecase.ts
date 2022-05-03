import { updateCustomerUseCase, UpdateCustomerUseCase } from '@/domain/usecases'
import { CustomerRepo } from '@/infra/db/customer-repo'

export const makeUpdateCustomerUseCase = (): UpdateCustomerUseCase => {
  const customerRepo = new CustomerRepo()
  return updateCustomerUseCase(customerRepo)
}
