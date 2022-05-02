import { AddCustomerController } from '@/application/controllers'
import { Validation } from '@/application/validations'
import { AddressValidation } from '@/application/validations/address-validation'
import { CustomerValidation } from '@/application/validations/customer-validation'
import { ValidationComposite } from '@/application/validations/validation-composite'
import { addAddressUseCase, addCustomerUseCase } from '@/domain/usecases'
import { AxiosApi } from '@/infra/api/axios-api'
import { AddressRepo } from '@/infra/db/address-repo'
import { CustomerRepo } from '@/infra/db/customer-repo'
import { Router } from 'express'
import { env } from './config/env'

const routes = Router()

const makeValidation = (): Validation => {
  const validations: any[] = []
  const customerValidation = new CustomerValidation(
    'customer',
    ['cnpj', 'corporateName', 'contactName', 'phone'],
    [['cnpj', ''], ['corporateName', ''], ['contactName', ''], ['phone', '']]
  )
  const addressValidation = new AddressValidation(
    'addresses',
    ['publicPlace', 'addressNumber', 'district', 'city', 'state', 'cep'],
    [['publicPlace', ''], ['addressNumber', 1], ['district', ''], ['city', ''], ['state', ''], ['cep', '']]
  )
  validations.push(customerValidation, addressValidation)
  return new ValidationComposite(validations)
}

routes.post('/customer', async (req, res) => {
  const customerRepo = new CustomerRepo()
  const addressRepo = new AddressRepo()
  const axiosApi = new AxiosApi(env.url)
  const addCustomer = addCustomerUseCase(customerRepo, customerRepo)
  const addAddress = addAddressUseCase(addressRepo, axiosApi, addressRepo)
  const controller = new AddCustomerController(makeValidation(), addCustomer, addAddress)
  const request = {
    ...req.body
  }
  const httpResponse = await controller.handle(request)
  return res.status(httpResponse.statusCode).json(httpResponse.body)
})

export { routes }
