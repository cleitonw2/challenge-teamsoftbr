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

  it('Should return false if LoadCustomerRepo returns false', async () => {
    const { sut, loadCustomerRepoSpy } = makeSut()
    loadCustomerRepoSpy.result = false
    const res = await sut('any_cnpj')
    expect(res).toBe(false)
  })
})
