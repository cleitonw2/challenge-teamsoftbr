import { UpdateAddressRepo } from '../contracts'
import { Address } from '../entities'

export type UpdateAddressUseCase = (params: Address) => Promise<void>

export const updateAddressUseCase =
  (updateAddressRepo: UpdateAddressRepo) =>
    async (params: Address) => {
      await updateAddressRepo.update(params)
    }
