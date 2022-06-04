import { pipe } from 'fp-ts/function'
import { fromEither } from 'fp-ts/TaskEither'
import { dateCodec } from './date'
import { getErrorMessage, mapAll } from '@/config/tests/fixtures'

it('Should validate date properly', async () => {
  const date = new Date().toISOString()
  return pipe(
    date,
    dateCodec.decode,
    fromEither,
    mapAll(result => expect(result).toBe(date)),
  )()
})

it('Should not accept a string different from date ISOString', async () => {
  return pipe(
    '10/10/2010',
    dateCodec.decode,
    fromEither,
    mapAll(errors => expect(getErrorMessage(errors)).toBe('Invalid date. Please use date.toISOString().')),
  )()
})
