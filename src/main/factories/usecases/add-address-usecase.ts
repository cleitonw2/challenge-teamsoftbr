import { addAddressUseCase, AddAddressUseCase } from '@/domain/usecases'
import { AxiosApi } from '@/infra/api/axios-api'
import { AddressRepo } from '@/infra/db/address-repo'
import { env } from '@/main/config/env'

export const makeAddAddressUseCase = (): AddAddressUseCase => {
  const addressRepo = new AddressRepo()
  const axiosApi = new AxiosApi(env.url)
  return addAddressUseCase(addressRepo, axiosApi, addressRepo)
}
