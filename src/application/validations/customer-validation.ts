import { Validation } from './validation'

export class CustomerValidation implements Validation {
  constructor (
    private readonly fildName: string,
    private readonly requiredFields: string[],
    private readonly typeFields: any[]
  ) {}

  validate (input: any): string | null {
    const field = input[this.fildName]
    const requiredFieldError = this.required(field)
    if (requiredFieldError) return requiredFieldError
    const validateFieldError = this.validateTypes(field)
    if (validateFieldError) return validateFieldError
    const validateCnpjError = this.validationCnpj(field.cnpj)
    if (validateCnpjError) return validateCnpjError
    return null
  }

  private required (field: string): null | string {
    for (const requiredField of this.requiredFields) {
      if (!field[requiredField]) return `O campo ${requiredField} deve ser informado`
    }
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

  private validationCnpj (value: string): null | string {
    const cnpjInvalid = 'CNPJ inválido'
    const cnpj = String(value).replace(/[^\d]/g, '')
    if (cnpj.length !== 14 || /0{14}/.test(cnpj)) return cnpjInvalid
    this.calculateCheckDigit(cnpj.slice(0, 12))
    const base = cnpj.slice(0, 13)
    const result = this.calculateCheckDigit(base)
    if (base + result.toString() !== cnpj) return cnpjInvalid
    return null
  }

  private calculateCheckDigit (base: string): number {
    const baseLength = base.length
    let multiplier = 9
    let sum = 0
    for (let i = baseLength - 1; i >= 0; i--) {
      sum += +base[i] * multiplier
      multiplier--
      multiplier = multiplier < 2 ? 9 : multiplier
    }
    return sum % 11
  }
}
