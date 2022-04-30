import { addCustomerUseCase } from '@/domain/usecases'
import { CheckCnpjRepoSpy, AddCustomerRepoSpy } from '@/tests/domain/mocks'
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
  addCustomerRepoSpy: AddCustomerRepoSpy
}

const makeSut = (): SutTypes => {
  const checkCnpjRepoSpy = new CheckCnpjRepoSpy()
  const addCustomerRepoSpy = new AddCustomerRepoSpy()
  const sut = addCustomerUseCase(checkCnpjRepoSpy, addCustomerRepoSpy)
  return {
    sut,
    checkCnpjRepoSpy,
    addCustomerRepoSpy
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

  it('Should call AddCustomerRepo with correct customer', async () => {
    const { sut, addCustomerRepoSpy } = makeSut()
    const data = mockCustomer()
    await sut(data)
    expect(addCustomerRepoSpy.params).toEqual(data)
  })
})
