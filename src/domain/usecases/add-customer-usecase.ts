import { CheckCnpjRepo } from '../contracts'
import { Customer } from '../entities'

export const addCustomerUseCase =
  (chekCnpjRepo: CheckCnpjRepo) =>
    async (data: Customer) => {
      const customerExists = await chekCnpjRepo.checkCnpj(data.cnpj)
      if (customerExists) return false
    }
