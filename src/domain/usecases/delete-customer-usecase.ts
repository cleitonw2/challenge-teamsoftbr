import { DeleteCustomerRepo } from '../contracts'

export type DeleteCustomerUseCase = (cnpj: string) => Promise<void>

export const deleteCustomerUseCase =
  (deleteCustomerRepo: DeleteCustomerRepo) =>
    async (cnpj: string) => {
      await deleteCustomerRepo.delete(cnpj)
    }
