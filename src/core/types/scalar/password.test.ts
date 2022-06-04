import { pipe } from 'fp-ts/function'
import { fromEither } from 'fp-ts/TaskEither'
import { passwordCodec } from './password'
import { getErrorMessage, mapAll } from '@/config/tests/fixtures'

it('Should validate password properly', async () => {
  return pipe(
    '12345678',
    passwordCodec.decode,
    fromEither,
    mapAll(result => expect(result).toBe('12345678')),
  )()
})

it('Should not accept a password less then 8 characters long', async () => {
  return pipe(
    '1234567',
    passwordCodec.decode,
    fromEither,
    mapAll(errors => expect(getErrorMessage(errors)).toBe('Password should be at least 8 characters.')),
  )()
})
