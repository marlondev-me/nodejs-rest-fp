import {
  emailCodec,
  passwordCodec,
  urlCodec,
  slugCodec,
} from '@/core/types/scalar'
import { intersection, partial, string, type, TypeOf } from 'io-ts'

const userCodecRequired = type({
  email: emailCodec,
  username: slugCodec,
})

const userCodecPartial = partial({
  token: string,
  bio: string,
  image: urlCodec,
})

export const userCodec = intersection([
  userCodecRequired,
  userCodecPartial,
])

export type User = TypeOf<typeof userCodec>

export const createUserCodec = type({
  username: slugCodec,
  email: emailCodec,
  password: passwordCodec,
})

export type CreateUser = TypeOf<typeof createUserCodec>
