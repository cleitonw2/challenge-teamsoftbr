import { loadCustomerUseCase, LoadCustomerUseCase } from '@/domain/usecases'
import { LoadCustomerRepoSpy } from '@/tests/domain/mocks'

type SutTypes = {
  sut: LoadCustomerUseCase
  loadCustomerRepoSpy: LoadCustomerRepoSpy
}

const makeSut = (): SutTypes => {
  const loadCustomerRepoSpy = new LoadCustomerRepoSpy()
  const sut = loadCustomerUseCase(loadCustomerRepoSpy)
  return {
    sut,
    loadCustomerRepoSpy
  }
}

describe('LoadCustomer UseCase', () => {
  it('Should call LoadCustomerRepo with correct param', async () => {
    const { sut, loadCustomerRepoSpy } = makeSut()
    await sut('any_cnpj')
    expect(loadCustomerRepoSpy.cnpj).toBe('any_cnpj')
  })

  it('Should return empty if LoadCustomerRepo returns empty result', async () => {
    const { sut, loadCustomerRepoSpy } = makeSut()
    loadCustomerRepoSpy.result = {}
    const res = await sut('any_cnpj')
    expect(res).toEqual({})
  })

  it('Should return a customer on success', async () => {
    const { sut, loadCustomerRepoSpy } = makeSut()
    const result = await sut('any_cnpj')
    const customer = loadCustomerRepoSpy.result
    expect(result).toEqual(customer)
  })
})
