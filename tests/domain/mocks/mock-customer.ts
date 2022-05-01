import { CheckContentRepo, AddContentRepo, LoadContentRepo, UpdateContentRepo, DeleteContentRepo } from '@/domain/contracts'
import { Customer } from '../entities'

export class CheckCnpjRepoSpy implements CheckContentRepo<{ cnpj: string }> {
  cnpj: string
  result: boolean = false

  async check (params: { cnpj: string }): Promise<boolean> {
    this.cnpj = params.cnpj
    return Promise.resolve(this.result)
  }
}

export class AddCustomerRepoSpy implements AddContentRepo<Customer> {
  params: Customer
  result: boolean = true

  async add (data: Customer): Promise<boolean> {
    this.params = data
    return Promise.resolve(this.result)
  }
}

export class LoadCustomerRepoSpy implements LoadContentRepo<Customer | boolean> {
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

export class UpdateCustomerRepoSpy implements UpdateContentRepo<Customer> {
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
