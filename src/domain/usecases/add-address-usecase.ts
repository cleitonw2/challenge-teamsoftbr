import { AddAddressRepo, CheckAddressRepo } from '../contracts'
import { Address } from '../entities'

type Params = { params: Address }
type Result = { result: boolean }

export type AddAddressUseCase = (params: Params) => Promise<Result>

export const addAddressUseCase =
  (checkAddressRepo: CheckAddressRepo, addAddressRepo: AddAddressRepo) =>
    async (params: Address) => {
      const { addressNumber, cep } = params
      const addressExists = await checkAddressRepo.check(addressNumber, cep)
      if (addressExists) return false
      return addressExists ? false : addAddressRepo.add(params)
    }
