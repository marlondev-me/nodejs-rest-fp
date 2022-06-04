import {
  mapAll,
  unsafeEmail,
  unsafePassword,
  unsafeSlug,
} from '@/config/tests/fixtures'
import { CreateUser } from '@/core/types/user'
import { pipe } from 'fp-ts/function'
import { OutsideRegister, register } from './register'

const registerOk: OutsideRegister<string> = async (data) => {
  return `Usuario ${data.username} cadastrado com sucesso!`
}

const registerFail: OutsideRegister<never> = async () => {
  throw new Error('External error!')
}

const data: CreateUser = {
  username: unsafeSlug('marlon'),
  email: unsafeEmail('marlon@email.com'),
  password: unsafePassword('12345678'),
}

const dataWithWrongUsername: CreateUser = {
  username: unsafeSlug('a'),
  email: unsafeEmail('marlon@email.com'),
  password: unsafePassword('12345678'),
}

const dataWithWrongEmailAndPassword: CreateUser = {
  username: unsafeSlug('marlon'),
  email: unsafeEmail('marlonemail.com'),
  password: unsafePassword('123456'),
}

it('Should register user properly', async () => {
  return pipe(
    data,
    register(registerOk),
    mapAll(result =>
      expect(result).toBe(`Usuario ${data.username} cadastrado com sucesso!`),
    ),
  )()
})

it('Should not accept a register from a user with invalid username', async () => {
  return pipe(
    dataWithWrongUsername,
    register(registerOk),
    mapAll(error =>
      expect(error).toEqual(
        new Error('Invalid slug. Please, use alphanumeric characters, dash and/or numbers.'),
      ),
    ),
  )()
})

it(
  'Should not accept a register from a user with invalid email and/or password',
  async () => {
    return pipe(
      dataWithWrongEmailAndPassword,
      register(registerOk),
      mapAll(error =>
        expect(error).toEqual(
          new Error('Invalid email:::Password should be at least 8 characters.'),
        ),
      ),
    )()
  })

it('Should return a Left if register function throw error', async () => {
  return pipe(
    data,
    register(registerFail),
    mapAll(error =>
      expect(error).toEqual(
        new Error('External error!'),
      ),
    ),
  )()
})
