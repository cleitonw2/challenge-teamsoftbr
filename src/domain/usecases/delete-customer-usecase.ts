import { DeleteContentRepo } from '../contracts'

export type DeleteCustomerUseCase = (cnpj: string) => Promise<void>

export const deleteCustomerUseCase =
  (deleteCustomerRepo: DeleteContentRepo, deleteAddressRepo: DeleteContentRepo) =>
    async (cnpj: string) => {
      await deleteCustomerRepo.delete(cnpj)
      await deleteAddressRepo.delete(cnpj)
    }
