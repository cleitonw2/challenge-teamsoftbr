import { CheckCnpjRepo, AddCustomerRepo } from '@/domain/contracts'
import { Customer } from '../entities'

export class CheckCnpjRepoSpy implements CheckCnpjRepo {
  cnpj: string
  result: boolean = false

  async checkCnpj (cnpj: string): Promise<boolean> {
    this.cnpj = cnpj
    return Promise.resolve(this.result)
  }
}

export class AddCustomerRepoSpy implements AddCustomerRepo {
  params: Customer
  result: boolean = true

  async add (data: Customer): Promise<boolean> {
    this.params = data
    return Promise.resolve(this.result)
  }
}
