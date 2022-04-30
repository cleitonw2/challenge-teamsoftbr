import { CheckAddressRepo, AddAddressRepo } from '@/domain/contracts'
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
