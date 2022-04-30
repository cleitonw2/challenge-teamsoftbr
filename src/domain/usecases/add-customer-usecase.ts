import { AddCustomerRepo, CheckCnpjRepo } from '../contracts'
import { Customer } from '../entities'

export const addCustomerUseCase =
  (chekCnpjRepo: CheckCnpjRepo, addCustomerRepo: AddCustomerRepo) =>
    async (data: Customer) => {
      const customerExists = await chekCnpjRepo.checkCnpj(data.cnpj)
      return customerExists ? false : addCustomerRepo.add(data)
    }
