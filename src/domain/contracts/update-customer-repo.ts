import { Customer } from '../entities'

export interface UpdateCustomerRepo {
  update: (params: Customer) => Promise<void>
}
