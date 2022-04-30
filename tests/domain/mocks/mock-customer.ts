import { CheckCnpjRepo } from '@/domain/contracts'

export class CheckCnpjRepoSpy implements CheckCnpjRepo {
  cnpj: string
  result: boolean = false

  async checkCnpj (cnpj: string): Promise<boolean> {
    this.cnpj = cnpj
    return Promise.resolve(this.result)
  }
}
