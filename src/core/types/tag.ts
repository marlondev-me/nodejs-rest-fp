import { string, TypeOf } from 'io-ts'

export const tagCodec = string

export type Tag = TypeOf<typeof tagCodec>
