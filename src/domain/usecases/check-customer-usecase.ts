import { CheckContentRepo } from '../contracts'

export type CheckCustomerUseCase = (cnpj: string) => Promise<boolean>

export const checkCustomerUseCase =
  (chekCnpjRepo: CheckContentRepo) =>
    async (cnpj: string) => {
      return chekCnpjRepo.check({ cnpj })
    }
