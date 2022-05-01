export interface LoadCoordinatesApi {
  load: (cep: string) => Promise<{ longitude: string, latitude: string }>
}
