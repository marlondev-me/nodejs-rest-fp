import {
  emailCodec,
  passwordCodec,
  urlCodec,
  slugCodec,
} from '@/core/types/scalar'
import { string, type, TypeOf } from 'io-ts'

export const userCodec = type({
  email: emailCodec,
  token: string,
  username: slugCodec,
  bio: string,
  image: urlCodec,
})

export type User = TypeOf<typeof userCodec>

export const createUserCodec = type({
  username: slugCodec,
  email: emailCodec,
  password: passwordCodec,
})

export type CreateUser = TypeOf<typeof createUserCodec>
