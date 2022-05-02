import { Validation } from './validation'

export class AddressValidation implements Validation {
  constructor (
    private readonly fildName: string,
    private readonly requiredFields: string[],
    private readonly typeFields: any[]
  ) {}

  validate (input: any): string | null {
    const fields = input[this.fildName]
    for (const field of fields) {
      const fieldError = this.required(field)
      if (fieldError) return fieldError
      const fieldTypeError = this.validateTypes(field)
      if (fieldTypeError) return fieldTypeError
      const cepError = this.cepValidation(field.cep)
      if (cepError) return cepError
    }
    return null
  }

  private required (field: string): null | string {
    for (const requiredField of this.requiredFields) {
      if (!field[requiredField]) return `O campo ${requiredField} deve ser informado`
    }
    return null
  }

  private cepValidation (cep: string): string | null {
    const regex = /^[0-9]{2}\.[0-9]{3}-[0-9]{3}$/
    if (!regex.test(cep)) return 'O CEP está em formato inválido ex: 00.00-000'
    return null
  }

  private validateTypes (field: string): null | string {
    for (const typeField of this.typeFields) {
      const fieldName = typeField[0]
      const fieldType = typeField[1]
      if (typeof field[fieldName] !== typeof fieldType) { return `O campo ${fieldName} deve ser do tipo ${typeof fieldType}` }
    }
    return null
  }
}
