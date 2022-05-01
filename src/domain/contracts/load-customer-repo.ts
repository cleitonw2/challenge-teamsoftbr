import { Customer } from '../entities'

export interface LoadCustomerRepo {
  load: (cnpj: string) => Promise<Customer | boolean>
}
