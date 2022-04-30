import { CheckAddressRepo } from '@/domain/contracts'

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
