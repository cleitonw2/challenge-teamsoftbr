import { checkCustomerUseCase, CheckCustomerUseCase } from '@/domain/usecases'
import { CustomerRepo } from '@/infra/db/customer-repo'

export const makeCheckCustomerUseCase = (): CheckCustomerUseCase => {
  const customerRepo = new CustomerRepo()
  return checkCustomerUseCase(customerRepo)
}
