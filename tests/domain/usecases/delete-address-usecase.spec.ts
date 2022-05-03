import { deleteAddressUseCase, DeleteAddressUseCase } from '@/domain/usecases'
import { DeleteAddressRepoSpy } from '@/tests/domain/mocks'

type SutTypes = {
  sut: DeleteAddressUseCase
  deleteAddressRepoSpy: DeleteAddressRepoSpy
}

const makeSut = (): SutTypes => {
  const deleteAddressRepoSpy = new DeleteAddressRepoSpy()
  const sut = deleteAddressUseCase(deleteAddressRepoSpy)
  return {
    sut,
    deleteAddressRepoSpy
  }
}

describe('DeleteAddress UseCase', () => {
  it('Should call DeleteAddressRepo with correct param', async () => {
    const { sut, deleteAddressRepoSpy } = makeSut()
    const cnpj = Math.random().toString()
    const cep = Math.random().toString()
    const addressNumber = Math.random()
    await sut(cnpj, cep, addressNumber)
    expect(deleteAddressRepoSpy.params).toEqual({ cnpj, cep, addressNumber })
  })
})
