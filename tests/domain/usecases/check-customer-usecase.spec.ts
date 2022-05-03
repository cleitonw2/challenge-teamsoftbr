import { checkCustomerUseCase, CheckCustomerUseCase } from '@/domain/usecases'
import { CheckCnpjRepoSpy } from '@/tests/domain/mocks'

type SutTypes = {
  sut: CheckCustomerUseCase
  checkCnpjRepoSpy: CheckCnpjRepoSpy
}

const makeSut = (): SutTypes => {
  const checkCnpjRepoSpy = new CheckCnpjRepoSpy()
  const sut = checkCustomerUseCase(checkCnpjRepoSpy)
  return {
    sut,
    checkCnpjRepoSpy
  }
}

describe('AddCustomer UseCase', () => {
  it('Should call CheckCnpjRepo with correct cnpj', async () => {
    const { sut, checkCnpjRepoSpy } = makeSut()
    await sut('any_cnpj')
    expect(checkCnpjRepoSpy.cnpj).toBe('any_cnpj')
  })

  it('Should return true if CheckCnpjRepo return true', async () => {
    const { sut, checkCnpjRepoSpy } = makeSut()
    checkCnpjRepoSpy.result = true
    const customerExists = await sut('any_cnpj')
    expect(customerExists).toBe(true)
  })

  it('Should return false if CheckCnpjRepo return false', async () => {
    const { sut } = makeSut()
    const customerExists = await sut('any_cnpj')
    expect(customerExists).toBe(false)
  })
})
