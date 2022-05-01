export interface UpdateContentRepo<T = any> {
  update: (params: T) => Promise<void>
}
