import { AddCustomerRepo, CheckCnpjRepo } from '../contracts'
import { Customer } from '../entities'

type Params = { params: Customer }
type Result = { result: boolean }

export type AddCustomerUseCase = (params: Params) => Promise<Result>

export const addCustomerUseCase =
  (chekCnpjRepo: CheckCnpjRepo, addCustomerRepo: AddCustomerRepo) =>
    async (params: Customer) => {
      const customerExists = await chekCnpjRepo.checkCnpj(params.cnpj)
      return customerExists ? false : addCustomerRepo.add(params)
    }
