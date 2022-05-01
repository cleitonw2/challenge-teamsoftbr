import { AddContentRepo, CheckContentRepo, LoadCoordinatesApi } from '../contracts'
import { Address } from '../entities'

export type AddAddressUseCase = (params: Address) => Promise<boolean>

export const addAddressUseCase =
  (checkAddressRepo: CheckContentRepo, loadCoordinatesApi: LoadCoordinatesApi, addAddressRepo: AddContentRepo<Address>) =>
    async (params: Address) => {
      const { addressNumber, cep } = params
      const addressExists = await checkAddressRepo.check({ addressNumber, cep })
      if (addressExists) return false
      const coordinates = await loadCoordinatesApi.load(cep)
      return addAddressRepo.add({ ...params, ...coordinates })
    }
