import { unsafeEmail, mapAll, unsafeSlug, unsafePassword } from '@/config/tests/fixtures'
import { CreateUser } from '@/core/types/user'
import { pipe } from 'fp-ts/function'
import { OutsideRegister, register } from './register'

const registerOk: OutsideRegister<string> = async (data) => {
  return `Usuario ${data.username} cadastrado com sucesso!`
}

const data: CreateUser = {
  username: unsafeSlug('marlon'),
  email: unsafeEmail('marlon@email.com'),
  password: unsafePassword('12345678'),
}

it('Deveria cadastrar um usuario com sucesso', async () => {
  return pipe(
    data,
    register(registerOk),
    mapAll(result => expect(result).toBe(`Usuario ${data.username} cadastrado com sucesso!`)),
  )()
})
