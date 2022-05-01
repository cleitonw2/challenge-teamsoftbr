import { Address } from '../entities'

export interface LoadAddressRepo {
  load: (cnpj: string) => Promise<Address[] | []>
}
