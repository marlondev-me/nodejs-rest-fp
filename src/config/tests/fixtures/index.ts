import { Email } from '@/core/types/scalar'
import { TypeOf } from 'io-ts'

export function unsafeEmail (value:string): TypeOf<typeof Email> {
  return value as any
}
