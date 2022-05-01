import { addCustomerUseCase, AddCustomerUseCase } from '@/domain/usecases'
import { CheckCnpjRepoSpy, AddCustomerRepoSpy } from '@/tests/domain/mocks'
import { Customer } from '@/domain/entities'

const mockCustomer = (): Customer => ({
  cnpj: Math.random().toString(),
  corporateName: 'any',
  contactName: 'any',
  phone: 'any'
})

type SutTypes = {
  sut: AddCustomerUseCase
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

  it('Should return false if CheckCnpjRepo return true', async () => {
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

  it('Should return false if AddCustomerRepo return false', async () => {
    const { sut, addCustomerRepoSpy } = makeSut()
    addCustomerRepoSpy.result = false
    const isSuccessful = await sut(mockCustomer())
    expect(isSuccessful).toBe(false)
  })

  it('Should return true on success', async () => {
    const { sut } = makeSut()
    const isSuccessful = await sut(mockCustomer())
    expect(isSuccessful).toBe(true)
  })
})
