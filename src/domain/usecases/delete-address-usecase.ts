import { DeleteAddressRepo } from '../contracts'

export type DeleteAddressUseCase = (cnpj: string, cep: string, addressNumber: number) => Promise<void>

export const deleteAddressUseCase =
  (deleteAddressRepo: DeleteAddressRepo) =>
    async (cnpj: string, cep: string, addressNumber: number) => {
      await deleteAddressRepo.deleteOne(cnpj, cep, addressNumber)
    }
