import { updateCustomerUseCase, UpdateCustomerUseCase } from '@/domain/usecases'
import { UpdateCustomerRepoSpy } from '@/tests/domain/mocks'
import { Customer } from '@/domain/entities'

const mockCustomer = (): Customer => ({
  cnpj: Math.random().toString(),
  corporateName: 'any',
  contactName: 'any',
  phone: 'any'
})

type SutTypes = {
  sut: UpdateCustomerUseCase
  updateCustomerRepoSpy: UpdateCustomerRepoSpy
}

const makeSut = (): SutTypes => {
  const updateCustomerRepoSpy = new UpdateCustomerRepoSpy()
  const sut = updateCustomerUseCase(updateCustomerRepoSpy)
  return {
    sut,
    updateCustomerRepoSpy
  }
}

describe('UpdateCustomer UseCase', () => {
  it('Should call UpdateCustomerRepo with correct params', async () => {
    const { sut, updateCustomerRepoSpy } = makeSut()
    const data = mockCustomer()
    await sut(data)
    expect(updateCustomerRepoSpy.params).toEqual(data)
  })
})
