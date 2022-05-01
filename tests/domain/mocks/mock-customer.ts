import { CheckCnpjRepo, AddCustomerRepo, LoadCustomerRepo, UpdateCustomerRepo, DeleteContentRepo } from '@/domain/contracts'
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

export class LoadCustomerRepoSpy implements LoadCustomerRepo {
  cnpj: string
  result: Customer | boolean = {
    cnpj: Math.random().toString(),
    corporateName: 'any',
    contactName: 'any',
    phone: 'any'
  }

  async load (cnpj: string): Promise<Customer | boolean> {
    this.cnpj = cnpj
    return Promise.resolve(this.result)
  }
}

export class UpdateCustomerRepoSpy implements UpdateCustomerRepo {
  params: Customer

  async update (params: Customer): Promise<void> {
    this.params = params
    return Promise.resolve()
  }
}

export class DeleteCustomerRepoSpy implements DeleteContentRepo {
  cnpj: string

  async delete (cnpj: string): Promise<void> {
    this.cnpj = cnpj
    return Promise.resolve()
  }
}
