import { addAddressUseCase, AddAddressUseCase } from '@/domain/usecases'
import { CheckAddressRepoSpy, AddAddressRepoSpy } from '@/tests/domain/mocks'
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
  sut: AddAddressUseCase
  checkAddressRepoSpy: CheckAddressRepoSpy
  addAddressRepoSpy: AddAddressRepoSpy
}

const makeSut = (): SutTypes => {
  const checkAddressRepoSpy = new CheckAddressRepoSpy()
  const addAddressRepoSpy = new AddAddressRepoSpy()
  const sut = addAddressUseCase(checkAddressRepoSpy, addAddressRepoSpy)
  return {
    sut,
    checkAddressRepoSpy,
    addAddressRepoSpy
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

  it('Should return false if CheckAddressRepo returns true', async () => {
    const { sut, checkAddressRepoSpy } = makeSut()
    checkAddressRepoSpy.result = true
    const addressExists = await sut(mockAddress())
    expect(addressExists).toBe(false)
  })

  it('Should call AddAddressRepo with correct params', async () => {
    const { sut, addAddressRepoSpy } = makeSut()
    const data = mockAddress()
    await sut(data)
    expect(addAddressRepoSpy.params).toEqual(data)
  })

  it('Should retun true on success', async () => {
    const { sut } = makeSut()
    const result = await sut(mockAddress())
    expect(result).toBe(true)
  })
})
