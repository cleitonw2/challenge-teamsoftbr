import { LoadAddressRepo, LoadCustomerRepo } from '../contracts'
import { Address, Customer } from '../entities'

export type CustomerResult = {
  customer: Customer
  address: Address[]
}

export type LoadCustomerUseCase = (cnpj: string) => Promise<CustomerResult | boolean>

export const loadCustomerUseCase =
  (loadCustomerRepo: LoadCustomerRepo, LoadAddressRepo: LoadAddressRepo) =>
    async (cnpj: string) => {
      const customer = await loadCustomerRepo.load(cnpj)
      if (!customer) return false
      await LoadAddressRepo.load(cnpj)
      return { } as any
    }
