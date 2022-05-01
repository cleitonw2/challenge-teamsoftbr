import { updateAddressUseCase, UpdateAddressUseCase } from '@/domain/usecases'
import { UpdateAddressRepoSpy } from '@/tests/domain/mocks'
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
  sut: UpdateAddressUseCase
  updateAddressRepoSpy: UpdateAddressRepoSpy
}

const makeSut = (): SutTypes => {
  const updateAddressRepoSpy = new UpdateAddressRepoSpy()
  const sut = updateAddressUseCase(updateAddressRepoSpy)
  return {
    sut,
    updateAddressRepoSpy
  }
}

describe('UpdateAddress UseCase', () => {
  it('Should call UpdateAddressRepo with correct params', async () => {
    const { sut, updateAddressRepoSpy } = makeSut()
    const data = mockAddress()
    await sut(data)
    expect(updateAddressRepoSpy.params).toEqual(data)
  })
})
