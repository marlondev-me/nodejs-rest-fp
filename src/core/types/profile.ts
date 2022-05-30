import { type, string, boolean, TypeOf } from 'io-ts'

export const profileCodec = type({
  username: string,
  bio: string,
  image: string,
  following: boolean,
})

export type Profile = TypeOf<typeof profileCodec>
