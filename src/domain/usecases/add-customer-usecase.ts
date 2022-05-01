import { AddContentRepo, CheckContentRepo } from '../contracts'
import { Customer } from '../entities'

export type AddCustomerUseCase = (params: Customer) => Promise<boolean>

export const addCustomerUseCase =
  (chekCnpjRepo: CheckContentRepo, addCustomerRepo: AddContentRepo<Customer>) =>
    async (params: Customer) => {
      const customerExists = await chekCnpjRepo.check({ cnpj: params.cnpj })
      return customerExists ? false : addCustomerRepo.add(params)
    }
