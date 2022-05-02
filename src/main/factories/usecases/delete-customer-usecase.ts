import { deleteCustomerUseCase, DeleteCustomerUseCase } from '@/domain/usecases'
import { AddressRepo } from '@/infra/db/address-repo'

import { CustomerRepo } from '@/infra/db/customer-repo'

export const makeDeleteCustomerUseCase = (): DeleteCustomerUseCase => {
  const customerRepo = new CustomerRepo()
  const addressRepo = new AddressRepo()
  return deleteCustomerUseCase(customerRepo, addressRepo)
}
