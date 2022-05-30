import { brand, Branded, string } from 'io-ts'
import { withMessage } from 'io-ts-types'

type EmailBrand = {
  readonly Email: unique symbol
}

export const Email = withMessage(
  brand(
    string,
    (value): value is Branded<string, EmailBrand> => isEmail(value),
    'Email',
  ),
  () => 'Invalid email',
)

export function isEmail (value: string) {
  return /^\w+.+?@\w+.+?$/.test(value)
}
