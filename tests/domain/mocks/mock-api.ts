import { LoadCoordinatesApi } from '@/domain/contracts'

export class LoadCoordinatesApiSpy implements LoadCoordinatesApi {
  cep: string
  result = {
    longitude: '-1234134',
    latitude: '-29238414'
  }

  async load (cep: string): Promise<{ longitude: string, latitude: string }> {
    this.cep = cep
    return Promise.resolve(this.result)
  }
}
