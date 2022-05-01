export interface LoadContentRepo<T = any> {
  load: (cnpj: string) => Promise<T>
}
