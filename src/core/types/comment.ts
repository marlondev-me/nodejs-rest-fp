import { type, string, number, TypeOf } from 'io-ts'

import { profileCodec } from '@/core/types/profile'
import { dateCodec } from '@/core/types/scalar'

export const commentCodec = type({
  id: number,
  createdAt: dateCodec,
  updatedAt: dateCodec,
  body: string,
  author: profileCodec,
})

export type Comment = TypeOf<typeof commentCodec>
