import { AddCustomerRepo, CheckCnpjRepo } from '../contracts'
import { Customer } from '../entities'

export type AddCustomerUseCase = (params: Customer) => Promise<boolean>

export const addCustomerUseCase =
  (chekCnpjRepo: CheckCnpjRepo, addCustomerRepo: AddCustomerRepo) =>
    async (params: Customer) => {
      const customerExists = await chekCnpjRepo.checkCnpj(params.cnpj)
      return customerExists ? false : addCustomerRepo.add(params)
    }
