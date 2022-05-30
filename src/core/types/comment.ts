import { type, string, number, TypeOf } from 'io-ts'

import { profileCodec } from '@/core/types/profile'

export const commentCodec = type({
  id: number,
  createdAt: string,
  updatedAt: string,
  body: string,
  author: profileCodec,
})

export type Comment = TypeOf<typeof commentCodec>
