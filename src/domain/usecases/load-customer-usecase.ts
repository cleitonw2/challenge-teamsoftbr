import { LoadAddressRepo, LoadCustomerRepo } from '../contracts'
import { Address, Customer } from '../entities'

export type CustomerResult = {
  customer: Customer
  address: Address[]
}

export type LoadCustomerUseCase = (cnpj: string) => Promise<CustomerResult | boolean>

export const loadCustomerUseCase =
  (loadCustomerRepo: LoadCustomerRepo, LoadAddressRepo: LoadAddressRepo) =>
    async (cnpj: string): Promise<CustomerResult | boolean> => {
      const customer = await loadCustomerRepo.load(cnpj)
      if (!customer) return false
      const addresses = await LoadAddressRepo.load(cnpj)
      return {
        customer: customer as Customer,
        address: addresses
      }
    }
