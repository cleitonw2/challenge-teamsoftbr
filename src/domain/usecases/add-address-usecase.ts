import { CheckAddressRepo } from '../contracts'
import { Address } from '../entities'

type Params = { params: Address }
type Result = { result: boolean }

export type AddAddressUseCase = (params: Params) => Promise<Result>

export const addAddressUseCase =
  (checkAddressRepo: CheckAddressRepo) =>
    async (params: Address) => {
      const { addressNumber, cep } = params
      const addressExists = await checkAddressRepo.check(addressNumber, cep)
      if (addressExists) return false
      return true
    }
