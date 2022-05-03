import { deleteAddressUseCase, DeleteAddressUseCase } from '@/domain/usecases'
import { AddressRepo } from '@/infra/db/address-repo'

export const makeDeleteAddressUseCase = (): DeleteAddressUseCase => {
  const addressRepo = new AddressRepo()
  return deleteAddressUseCase(addressRepo)
}
