import { pipe } from 'fp-ts/function'
import { fromEither } from 'fp-ts/lib/TaskEither'
import { getErrorMessage, mapAll } from '@/config/tests/fixtures'
import { urlCodec } from './url'

it('Deveria validar a url corretamente', async () => {
  return pipe(
    'https://url.com',
    urlCodec.decode,
    fromEither,
    mapAll(result => expect(result).toBe('https://url.com')),
  )()
})

it('Deveria retornar um erro quando a URL for inválida', async () => {
  return pipe(
    'invalid-url',
    urlCodec.decode,
    fromEither,
    mapAll(errors => expect(getErrorMessage(errors)).toBe('Invalid URL'),
    ),
  )()
})
