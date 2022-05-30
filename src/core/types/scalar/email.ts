import { brand, Branded, string, TypeOf } from 'io-ts'
import { withMessage } from 'io-ts-types'

type EmailBrand = {
  readonly Email: unique symbol
}

export const emailCodec = withMessage(
  brand(
    string,
    (value): value is Branded<string, EmailBrand> => isEmail(value),
    'Email',
  ),
  () => 'Invalid email',
)

export type Email = TypeOf<typeof emailCodec>

export function isEmail (value: string) {
  return /^\w+.+?@\w+.+?$/.test(value)
}
