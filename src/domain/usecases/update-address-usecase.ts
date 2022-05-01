import { UpdateContentRepo } from '../contracts'
import { Address } from '../entities'

export type UpdateAddressUseCase = (params: Address) => Promise<void>

export const updateAddressUseCase =
  (updateAddressRepo: UpdateContentRepo<Address>) =>
    async (params: Address) => {
      await updateAddressRepo.update(params)
    }
