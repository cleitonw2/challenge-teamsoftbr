import { addCustomerUseCase } from '@/domain/usecases'
import { CheckCnpjRepoSpy } from '@/tests/domain/mocks'
import { Customer } from '@/domain/entities'

const mockCustomer = (): Customer => ({
  cnpj: Math.random().toString(),
  corporateName: 'any',
  contactName: 'any',
  phone: 'any',
  address: ['cnpj']
})

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
    const data = mockCustomer()
    await sut(data)
    expect(checkCnpjRepoSpy.cnpj).toBe(data.cnpj)
  })

  it('Should return false if CheckCnpjRepo true', async () => {
    const { sut, checkCnpjRepoSpy } = makeSut()
    checkCnpjRepoSpy.result = true
    const customerExists = await sut(mockCustomer())
    expect(customerExists).toBe(false)
  })
})
