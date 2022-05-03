import { LoadContentRepo } from '../contracts'
import { Address } from '../entities'

export type LoadAddressesUseCase = (cnpj: string) => Promise<Address[]>

export const loadAddressesUseCase =
  (LoadAddressRepo: LoadContentRepo) =>
    async (cnpj: string): Promise<Address[]> => {
      return LoadAddressRepo.load(cnpj)
    }
