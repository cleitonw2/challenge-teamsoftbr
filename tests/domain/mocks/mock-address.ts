import { CheckAddressRepo, AddAddressRepo, LoadAddressRepo } from '@/domain/contracts'
import { Address } from '../entities'

export class CheckAddressRepoSpy implements CheckAddressRepo {
  params: {
    addressNumber: number
    cep: string
  }

  result: boolean = false

  async check (addressNumber: number, cep: string): Promise<boolean> {
    this.params = { addressNumber, cep }
    return Promise.resolve(this.result)
  }
}

export class AddAddressRepoSpy implements AddAddressRepo {
  params: Address
  result: boolean = true

  async add (params: Address): Promise<boolean> {
    this.params = params
    return Promise.resolve(this.result)
  }
}

export class LoadAddressRepoSpy implements LoadAddressRepo {
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
