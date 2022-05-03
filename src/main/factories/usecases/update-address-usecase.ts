import { updateAddressUseCase, UpdateAddressUseCase } from '@/domain/usecases'
import { AddressRepo } from '@/infra/db/address-repo'

export const makeUpdateAddressUseCase = (): UpdateAddressUseCase => {
  const addressRepo = new AddressRepo()
  return updateAddressUseCase(addressRepo)
}
