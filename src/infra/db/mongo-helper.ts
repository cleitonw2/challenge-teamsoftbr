import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null,
  uri: '',

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
    this.uri = uri
  },

  async disconnect (): Promise<void> {
    this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  map (data: any) {
    const { _id, ...rest } = data
    return rest
  },

  mapCollection (collections: any) {
    return collections.map(c => MongoHelper.map(c))
  }
}
