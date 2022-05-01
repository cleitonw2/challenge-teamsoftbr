import { CheckContentRepo, AddContentRepo, LoadContentRepo, UpdateContentRepo, DeleteContentRepo } from '@/domain/contracts'
import { Address } from '../entities'

type Params = {
  addressNumber: number
  cep: string
}

export class CheckAddressRepoSpy implements CheckContentRepo<Params> {
  params: {
    addressNumber: number
    cep: string
  }

  result: boolean = false

  async check (params: Params): Promise<boolean> {
    this.params = params
    return Promise.resolve(this.result)
  }
}

export class AddAddressRepoSpy implements AddContentRepo<Address> {
  params: Address
  result: boolean = true

  async add (params: Address): Promise<boolean> {
    this.params = params
    return Promise.resolve(this.result)
  }
}

export class LoadAddressRepoSpy implements LoadContentRepo<Address[] | []> {
  cnpj: string
  result: Address[] | [] = [{
    publicPlace: 'any',
    addressNumber: 1,
    complement: 'any_complement',
    district: 'any_district',
    city: 'any_city',
    state: 'any_state',
    cep: 'any_cep',
    customerCep: 'any',
    latitude: 'any',
    longitude: 'any'
  }]

  async load (cnpj: string): Promise<Address[] | []> {
    this.cnpj = cnpj
    return Promise.resolve(this.result)
  }
}

export class UpdateAddressRepoSpy implements UpdateContentRepo<Address> {
  params: Address

  async update (params: Address): Promise<void> {
    this.params = params
    return Promise.resolve()
  }
}

export class DeleteAddressRepoSpy implements DeleteContentRepo {
  cnpj: string

  async delete (cnpj: string): Promise<void> {
    this.cnpj = cnpj
    return Promise.resolve()
  }
}
