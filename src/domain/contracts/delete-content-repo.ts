export interface DeleteContentRepo {
  delete: (cnpj: string) => Promise<void>
}
