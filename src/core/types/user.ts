import { TypeOf } from 'io-ts'
import { Email } from '@/core/types/scalar'

export type User = {
  email: TypeOf<typeof Email>
  token: string
  username: string
  bio: string
  image: string
}

export type CreateUser = {
  username: string
  email: TypeOf<typeof Email>
  password: string
}
