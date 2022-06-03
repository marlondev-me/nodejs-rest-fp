import { pipe } from 'fp-ts/function'
import { fromEither } from 'fp-ts/TaskEither'
import { dateCodec } from './date'
import { mapAll } from '@/config/tests/fixtures'
it('Should validate date properly', () => {
  const date = new Date().toISOString()
  pipe(
    date,
    dateCodec.decode,
    fromEither,
    mapAll(result => expect(result).toBe(date)),
  )
})
