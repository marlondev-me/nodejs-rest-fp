import { URL } from 'url'
import { brand, Branded, string, TypeOf } from 'io-ts'
import { withMessage } from 'io-ts-types'

type UrlBrand = {
  readonly Url: unique symbol
}

export const urlCodec = withMessage(
  brand(
    string,
    (value): value is Branded<string, UrlBrand> => isUrl(value),
    'Url',
  ),
  () => 'Invalid URL',
)

export type Url = TypeOf<typeof urlCodec>

function isUrl (value:unknown) {
  try {
    const url = new URL(typeof value === 'string' ? value : '')
    return !!url
  } catch (e) {
    return false
  }
}
