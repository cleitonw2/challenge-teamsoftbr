import { deleteCustomerUseCase, DeleteCustomerUseCase } from '@/domain/usecases'
import { DeleteCustomerRepoSpy } from '@/tests/domain/mocks'

type SutTypes = {
  sut: DeleteCustomerUseCase
  deleteCustomerRepoSpy: DeleteCustomerRepoSpy
}

const makeSut = (): SutTypes => {
  const deleteCustomerRepoSpy = new DeleteCustomerRepoSpy()
  const sut = deleteCustomerUseCase(deleteCustomerRepoSpy)
  return {
    sut,
    deleteCustomerRepoSpy
  }
}

describe('DeleteCustomer UseCase', () => {
  it('Should call DeleteCustomerRepo with correct param', async () => {
    const { sut, deleteCustomerRepoSpy } = makeSut()
    const cnpj = Math.random.toString()
    await sut(cnpj)
    expect(deleteCustomerRepoSpy.cnpj).toEqual(cnpj)
  })
})
