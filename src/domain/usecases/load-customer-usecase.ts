import { LoadContentRepo } from '../contracts'
import { Address, Customer } from '../entities'

export type CustomerResult = {
  customer: Customer
  addresses: Address[]
}

export type LoadCustomerUseCase = (cnpj: string) => Promise<CustomerResult | boolean>

export const loadCustomerUseCase =
  (loadCustomerRepo: LoadContentRepo, LoadAddressRepo: LoadContentRepo) =>
    async (cnpj: string): Promise<CustomerResult> => {
      const customer = await loadCustomerRepo.load(cnpj)
      const addresses = await LoadAddressRepo.load(cnpj)
      return {
        customer,
        addresses
      }
    }
