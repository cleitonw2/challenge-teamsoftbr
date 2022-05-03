import { AddContentRepo, CheckContentRepo, LoadContentRepo, DeleteContentRepo, UpdateContentRepo } from '@/domain/contracts'
import { Customer } from '@/domain/entities'
import { MongoHelper } from './mongo-helper'

export class CustomerRepo implements AddContentRepo, CheckContentRepo, LoadContentRepo,
DeleteContentRepo, UpdateContentRepo {
  async add (params: Customer): Promise<boolean> {
    const customersCollection = await MongoHelper.getCollection('customers')
    return !!await customersCollection.insertOne(params)
  }

  async check ({ cnpj }: { cnpj: string }): Promise<boolean> {
    const customersCollection = await MongoHelper.getCollection('customers')
    return !!await customersCollection.findOne({ cnpj })
  }

  async load (cnpj: string): Promise<Customer> {
    const customersCollection = await MongoHelper.getCollection('customers')
    const collection = await customersCollection.findOne({ cnpj: cnpj })
    return collection ? MongoHelper.map(collection) : {}
  }

  async update (params: Customer): Promise<void> {
    const { cnpj, ...rest } = params
    const customersCollection = await MongoHelper.getCollection('customers')
    await customersCollection.updateOne(
      { cnpj },
      {
        $set: { ...rest }
      }
    )
  }

  async delete (cnpj: string): Promise<void> {
    const customersCollection = await MongoHelper.getCollection('customers')
    await customersCollection.deleteOne({ cnpj })
  }
}
