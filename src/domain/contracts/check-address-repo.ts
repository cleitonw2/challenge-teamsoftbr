export interface CheckAddressRepo {
  check: (addressNumber: number, cep: string) => Promise<boolean>
}
