import { addCustomerUseCase, AddCustomerUseCase } from '@/domain/usecases'
import { CustomerRepo } from '@/infra/db/customer-repo'

export const makeAddCustomerUseCase = (): AddCustomerUseCase => {
  const customerRepo = new CustomerRepo()
  return addCustomerUseCase(customerRepo, customerRepo)
}
