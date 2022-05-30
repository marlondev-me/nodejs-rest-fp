import { emailCodec } from '@/core/types/scalar'
import { string, type, TypeOf } from 'io-ts'

export const userCodec = type({
  email: emailCodec,
  token: string,
  username: string,
  bio: string,
  image: string,
})

export type User = TypeOf<typeof userCodec>

export const createUserCodec = type({
  username: string,
  email: emailCodec,
  password: string,
})

export type CreateUser = TypeOf<typeof createUserCodec>
