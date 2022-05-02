import { loadCustomerUseCase, LoadCustomerUseCase } from '@/domain/usecases'
import { AddressRepo } from '@/infra/db/address-repo'

import { CustomerRepo } from '@/infra/db/customer-repo'

export const makeLoadCustomerUseCase = (): LoadCustomerUseCase => {
  const customerRepo = new CustomerRepo()
  const addressRepo = new AddressRepo()
  return loadCustomerUseCase(customerRepo, addressRepo)
}
