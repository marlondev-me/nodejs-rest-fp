import { map, mapLeft } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { emailCodec } from './email'

it('Deveria validar o email corretamente', () => {
  pipe(
    'marlon@e.mail',
    emailCodec.decode,
    map(result => expect(result).toBe('marlon@e.mail')),
  )
})

it('Deveria retornar um erro quando email for invalido', () => {
  pipe(
    'invalid-email',
    emailCodec.decode,
    mapLeft(error => expect(error[0]?.message).toBe('Invalid email')),
  )
})
