import { loadCustomerUseCase, LoadCustomerUseCase } from '@/domain/usecases'
import { CustomerRepo } from '@/infra/db/customer-repo'

export const makeLoadCustomerUseCase = (): LoadCustomerUseCase => {
  const customerRepo = new CustomerRepo()
  return loadCustomerUseCase(customerRepo)
}
