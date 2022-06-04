import { type, string, boolean, TypeOf } from 'io-ts'
import { slugCodec, urlCodec } from '@/core/types/scalar'

export const profileCodec = type({
  username: slugCodec,
  bio: string,
  image: urlCodec,
  following: boolean,
})

export type Profile = TypeOf<typeof profileCodec>
