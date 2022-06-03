import { TypeOf } from 'io-ts'
import { slugCodec } from '@/core/types/scalar'

export const tagCodec = slugCodec

export type Tag = TypeOf<typeof tagCodec>
