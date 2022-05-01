export interface CheckContentRepo<T = any> {
  check: (params: T) => Promise<boolean>
}
