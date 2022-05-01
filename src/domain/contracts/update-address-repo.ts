import { Address } from '../entities'

export interface UpdateAddressRepo {
  update: (params: Address) => Promise<void>
}
