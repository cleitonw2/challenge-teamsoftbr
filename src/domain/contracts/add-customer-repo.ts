import { Customer } from '../entities'

export interface AddCustomerRepo {
  add: (data: Customer) => Promise<boolean>
}
