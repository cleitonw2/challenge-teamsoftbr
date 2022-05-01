import { deleteCustomerUseCase, DeleteCustomerUseCase } from '@/domain/usecases'
import { DeleteCustomerRepoSpy, DeleteAddressRepoSpy } from '@/tests/domain/mocks'

type SutTypes = {
  sut: DeleteCustomerUseCase
  deleteCustomerRepoSpy: DeleteCustomerRepoSpy
  deleteAddressRepoSpy: DeleteAddressRepoSpy
}

const makeSut = (): SutTypes => {
  const deleteCustomerRepoSpy = new DeleteCustomerRepoSpy()
  const deleteAddressRepoSpy = new DeleteAddressRepoSpy()
  const sut = deleteCustomerUseCase(deleteCustomerRepoSpy, deleteAddressRepoSpy)
  return {
    sut,
    deleteCustomerRepoSpy,
    deleteAddressRepoSpy
  }
}

describe('DeleteCustomer UseCase', () => {
  it('Should call DeleteCustomerRepo with correct param', async () => {
    const { sut, deleteCustomerRepoSpy } = makeSut()
    const cnpj = Math.random.toString()
    await sut(cnpj)
    expect(deleteCustomerRepoSpy.cnpj).toEqual(cnpj)
  })

  it('Should call DeleteAddressRepo with correct param', async () => {
    const { sut, deleteAddressRepoSpy } = makeSut()
    const cnpj = Math.random.toString()
    await sut(cnpj)
    expect(deleteAddressRepoSpy.cnpj).toEqual(cnpj)
  })
})
