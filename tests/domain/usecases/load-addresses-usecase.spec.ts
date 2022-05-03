import { loadAddressesUseCase, LoadAddressesUseCase } from '@/domain/usecases'
import { LoadAddressRepoSpy } from '@/tests/domain/mocks'

type SutTypes = {
  sut: LoadAddressesUseCase
  loadAddressRepoSpy: LoadAddressRepoSpy
}

const makeSut = (): SutTypes => {
  const loadAddressRepoSpy = new LoadAddressRepoSpy()
  const sut = loadAddressesUseCase(loadAddressRepoSpy)
  return {
    sut,
    loadAddressRepoSpy
  }
}

describe('LoadAddresses UseCase', () => {
  it('Should call LoadCustomerRepo with correct param', async () => {
    const { sut, loadAddressRepoSpy } = makeSut()
    await sut('any_cnpj')
    expect(loadAddressRepoSpy.cnpj).toBe('any_cnpj')
  })

  it('Should return empty if LoadAddressRepo returns empty result', async () => {
    const { sut, loadAddressRepoSpy } = makeSut()
    loadAddressRepoSpy.result = []
    const res = await sut('any_cnpj')
    expect(res).toEqual([])
  })

  it('Should return a customer on success', async () => {
    const { sut, loadAddressRepoSpy } = makeSut()
    const result = await sut('any_cnpj')
    const addresses = loadAddressRepoSpy.result
    expect(result).toEqual(addresses)
  })
})
