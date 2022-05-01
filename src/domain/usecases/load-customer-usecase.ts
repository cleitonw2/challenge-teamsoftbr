import { LoadCustomerRepo } from '../contracts'
import { Address, Customer } from '../entities'

export type CustomerResult = {
  customer: Customer
  address: Address[]
}

export type LoadCustomerUseCase = (cnpj: string) => Promise<CustomerResult | boolean>

export const loadCustomerUseCase =
  (loadCustomerRepo: LoadCustomerRepo) =>
    async (cnpj: string) => {
      const customer = await loadCustomerRepo.load(cnpj)
      if (!customer) return false
      return { } as any
    }
