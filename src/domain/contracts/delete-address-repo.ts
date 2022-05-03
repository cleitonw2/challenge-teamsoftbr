export interface DeleteAddressRepo {
  deleteOne: (cnpj: string, cep: string, addressNumber: number) => Promise<void>
}
