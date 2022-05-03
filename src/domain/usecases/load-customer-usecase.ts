import { LoadContentRepo } from '../contracts'
import { Customer } from '../entities'

export type LoadCustomerUseCase = (cnpj: string) => Promise<Customer>

export const loadCustomerUseCase =
  (loadCustomerRepo: LoadContentRepo) =>
    async (cnpj: string): Promise<Customer> => {
      return loadCustomerRepo.load(cnpj)
    }
