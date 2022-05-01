import axios from 'axios'
import { LoadCoordinatesApi } from '@/domain/contracts'

export class AxiosApi implements LoadCoordinatesApi {
  constructor (private readonly url: string) {}

  async load (cep: string): Promise<{ longitude: string, latitude: string }> {
    const res = await axios.get(this.url + cep)
    const data = res.data.location.coordinates
    return data.logintude === undefined && data.latitude === undefined
      ? { longitude: '', latitude: '' }
      : data
  }
}
