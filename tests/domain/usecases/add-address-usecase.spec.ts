import { addAddressUseCase } from '@/domain/usecases'
import { CheckAddressRepoSpy } from '@/tests/domain/mocks'
import { Address } from '@/domain/entities'

const mockAddress = (): Address => ({
  publicPlace: 'any',
  addressNumber: 1,
  complement: 'any_complement',
  district: 'any_district',
  city: 'any_city',
  state: 'any_state',
  cep: 'any_cep',
  customerCep: 'any',
  latitude: 'any',
  longitude: 'any'
})

type SutTypes = {
  sut: any
  checkAddressRepoSpy: CheckAddressRepoSpy
}

const makeSut = (): SutTypes => {
  const checkAddressRepoSpy = new CheckAddressRepoSpy()
  const sut = addAddressUseCase(checkAddressRepoSpy)
  return {
    sut,
    checkAddressRepoSpy
  }
}

describe('AddAddress UseCase', () => {
  it('Should call CheckAddressRepo with correct params', async () => {
    const { sut, checkAddressRepoSpy } = makeSut()
    const data = mockAddress()
    await sut(data)
    expect(checkAddressRepoSpy.params).toEqual({
      addressNumber: data.addressNumber,
      cep: data.cep
    })
  })
})