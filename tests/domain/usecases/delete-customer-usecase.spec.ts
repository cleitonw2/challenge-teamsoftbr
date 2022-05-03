import { deleteCustomerUseCase, DeleteCustomerUseCase } from '@/domain/usecases'
import { DeleteCustomerRepoSpy, DeleteAddressesRepoSpy } from '@/tests/domain/mocks'

type SutTypes = {
  sut: DeleteCustomerUseCase
  deleteCustomerRepoSpy: DeleteCustomerRepoSpy
  deleteAddressesRepoSpy: DeleteAddressesRepoSpy
}

const makeSut = (): SutTypes => {
  const deleteCustomerRepoSpy = new DeleteCustomerRepoSpy()
  const deleteAddressesRepoSpy = new DeleteAddressesRepoSpy()
  const sut = deleteCustomerUseCase(deleteCustomerRepoSpy, deleteAddressesRepoSpy)
  return {
    sut,
    deleteCustomerRepoSpy,
    deleteAddressesRepoSpy
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
    const { sut, deleteAddressesRepoSpy } = makeSut()
    const cnpj = Math.random.toString()
    await sut(cnpj)
    expect(deleteAddressesRepoSpy.cnpj).toEqual(cnpj)
  })
})
