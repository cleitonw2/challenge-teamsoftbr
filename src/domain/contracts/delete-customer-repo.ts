export interface DeleteCustomerRepo {
  delete: (cnpj: string) => Promise<void>
}
