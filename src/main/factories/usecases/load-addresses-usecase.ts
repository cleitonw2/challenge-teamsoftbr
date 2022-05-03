import { loadAddressesUseCase, LoadAddressesUseCase } from '@/domain/usecases'
import { AddressRepo } from '@/infra/db/address-repo'

export const makeLoadAddressesUseCase = (): LoadAddressesUseCase => {
  const addressRepo = new AddressRepo()
  return loadAddressesUseCase(addressRepo)
}
