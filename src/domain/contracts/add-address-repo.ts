import { Address } from '../entities'

export interface AddAddressRepo {
  add: (params: Address) => Promise<boolean>
}
