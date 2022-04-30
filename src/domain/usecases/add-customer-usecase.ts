import { CheckCnpjRepo } from '../contracts'
import { Customer } from '../entities'

export const addCustomerUseCase =
  (chekCnpjRepo: CheckCnpjRepo) =>
    async (data: Customer) => {
      await chekCnpjRepo.checkCnpj(data.cnpj)
    }
