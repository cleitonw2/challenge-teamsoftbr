export interface AddContentRepo<T = any> {
  add: (params: T) => Promise<boolean>
}
