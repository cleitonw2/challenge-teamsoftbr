import { loadCustomerUseCase, LoadCustomerUseCase } from '@/domain/usecases'
import { LoadCustomerRepoSpy, LoadAddressRepoSpy } from '@/tests/domain/mocks'

type SutTypes = {
  sut: LoadCustomerUseCase
  loadCustomerRepoSpy: LoadCustomerRepoSpy
  loadAddressRepoSpy: LoadAddressRepoSpy
}

const makeSut = (): SutTypes => {
  const loadCustomerRepoSpy = new LoadCustomerRepoSpy()
  const loadAddressRepoSpy = new LoadAddressRepoSpy()
  const sut = loadCustomerUseCase(loadCustomerRepoSpy, loadAddressRepoSpy)
  return {
    sut,
    loadCustomerRepoSpy,
    loadAddressRepoSpy
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

  it('Should call LoadAddressRepo with correct param', async () => {
    const { sut, loadAddressRepoSpy } = makeSut()
    await sut('any_cnpj')
    expect(loadAddressRepoSpy.cnpj).toBe('any_cnpj')
  })

  it('Should return customer on success', async () => {
    const { sut, loadCustomerRepoSpy, loadAddressRepoSpy } = makeSut()
    const result = await sut('any_cnpj')
    expect(result).toEqual({
      customer: loadCustomerRepoSpy.result,
      address: loadAddressRepoSpy.result
    })
  })
})
