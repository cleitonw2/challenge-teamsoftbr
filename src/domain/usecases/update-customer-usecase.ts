import { UpdateCustomerRepo } from '../contracts'
import { Customer } from '../entities'

export type UpdateCustomerUseCase = (params: Customer) => Promise<void>

export const updateCustomerUseCase =
  (updateCustomerRepo: UpdateCustomerRepo) =>
    async (params: Customer) => {
      await updateCustomerRepo.update(params)
    }
