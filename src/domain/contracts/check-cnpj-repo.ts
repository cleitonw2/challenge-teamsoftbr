export interface CheckCnpjRepo {
  checkCnpj: (cnpj: string) => Promise<boolean>
}
