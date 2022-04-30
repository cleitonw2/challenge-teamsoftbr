import { addCustomerUseCase } from '@/domain/usecases'
import { CheckCnpjRepoSpy } from '@/tests/domain/mocks'

type SutTypes = {
  sut: any
  checkCnpjRepoSpy: CheckCnpjRepoSpy
}

const makeSut = (): SutTypes => {
  const checkCnpjRepoSpy = new CheckCnpjRepoSpy()
  const sut = addCustomerUseCase(checkCnpjRepoSpy)
  return {
    sut,
    checkCnpjRepoSpy
  }
}

describe('AddCustomer UseCase', () => {
  it('Should call CheckCnpjRepo with correct cnpj', async () => {
    const { sut, checkCnpjRepoSpy } = makeSut()
    const cnpj = Math.random().toString()
    await sut({
      cnpj,
      corporateName: 'any',
      contactName: 'any',
      phone: 'any',
      address: ['any']
    })
    expect(checkCnpjRepoSpy.cnpj).toBe(cnpj)
  })
})
