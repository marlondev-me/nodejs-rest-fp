import { map, mapLeft } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { Email } from './email'

it('Deveria validar o email corretamente', () => {
  pipe(
    'marlon@e.mail',
    Email.decode,
    map(result => expect(result).toBe('marlon@e.mail')),
  )
})

it('Deveria retornar um erro quando email for invalido', () => {
  pipe(
    'invalid-email',
    Email.decode,
    mapLeft(error => expect(error[0]?.message).toBe('Invalid email')),
  )
})
