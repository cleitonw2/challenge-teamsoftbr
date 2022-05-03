import { AddContentRepo, CheckContentRepo, LoadContentRepo, DeleteContentRepo, UpdateContentRepo } from '@/domain/contracts'
import { Address } from '@/domain/entities'
import { MongoHelper } from './mongo-helper'

export class AddressRepo implements AddContentRepo, CheckContentRepo, LoadContentRepo,
DeleteContentRepo, UpdateContentRepo {
  async add (params: Address): Promise<boolean> {
    const addressesCollection = await MongoHelper.getCollection('addresses')
    return !!await addressesCollection.insertOne(params)
  }

  async check ({ addressNumber, cep }: { addressNumber: number, cep: string }): Promise<boolean> {
    const addressesCollection = await MongoHelper.getCollection('addresses')
    return !!await addressesCollection.findOne({ addressNumber, cep })
  }

  async load (cnpj: string): Promise<Address[] | []> {
    const addressesCollection = await MongoHelper.getCollection('addresses')
    const collections = await addressesCollection.find({ customerCnpj: cnpj }).toArray()
    return collections.length !== 0 ? MongoHelper.mapCollection(collections) : []
  }

  async update (params: Address): Promise<void> {
    const { customerCnpj, addressNumber, cep, ...rest } = params
    const addressesCollection = await MongoHelper.getCollection('addresses')
    await addressesCollection.updateOne(
      { customerCnpj, addressNumber, cep },
      {
        $set: { ...rest }
      }
    )
  }

  async delete (cnpj: string): Promise<void> {
    const addressesCollection = await MongoHelper.getCollection('addresses')
    await addressesCollection.deleteMany({ customerCnpj: cnpj })
  }
}
