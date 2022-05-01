import { LoadCustomerRepo } from '../contracts'
import { Address, Customer } from '../entities'

export type CustomerResult = {
  customer: Customer
  address: Address[]
}

export type LoadCustomerUseCase = (cnpj: string) => Promise<CustomerResult>

export const loadCustomerUseCase =
  (loadCustomerRepo: LoadCustomerRepo) =>
    async (cnpj: string) => {
      await loadCustomerRepo.load(cnpj)
      return { } as any
    }
