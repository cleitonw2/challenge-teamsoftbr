import { AddContentRepo, CheckContentRepo } from '../contracts'
import { Address } from '../entities'

export type AddAddressUseCase = (params: Address) => Promise<boolean>

export const addAddressUseCase =
  (checkAddressRepo: CheckContentRepo, addAddressRepo: AddContentRepo<Address>) =>
    async (params: Address) => {
      const { addressNumber, cep } = params
      const addressExists = await checkAddressRepo.check({ addressNumber, cep })
      return addressExists ? false : addAddressRepo.add(params)
    }
