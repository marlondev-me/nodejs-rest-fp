import { unsafeEmail } from '@/config/tests/fixtures'
import { CreateUser } from '@/core/types/user'
import { pipe } from 'fp-ts/function'
import { map } from 'fp-ts/TaskEither'
import { OutsideRegister, register } from './register'

const registerOk: OutsideRegister<string> = async (data) => {
  return `Usuario ${data.username} cadastrado com sucesso!`
}

const data: CreateUser = {
  username: 'Marlon',
  email: unsafeEmail('marlon@email.com'),
  password: '123',
}

it('Deveria cadastrar um usuario com sucesso', async () => {
  return pipe(
    data,
    register(registerOk),
    map(result => expect(result).toBe(`Usuario ${data.username} cadastrado com sucesso!`)),
  )()
})
