import { pipe } from 'fp-ts/function'
import { fromEither } from 'fp-ts/TaskEither'
import { getErrorMessage, mapAll } from '@/config/tests/fixtures'
import { emailCodec } from './email'

it('Deveria validar o email corretamente', async () => {
  return pipe(
    'teste@email.com',
    emailCodec.decode,
    fromEither,
    mapAll(result => expect(result).toBe('teste@email.com')),
  )()
})

it('Deveria retornar um erro quando email for inválido', async () => {
  return pipe(
    'invalid-email',
    emailCodec.decode,
    fromEither,
    mapAll(errors => expect(getErrorMessage(errors)).toBe('Invalid email')),
  )()
})
