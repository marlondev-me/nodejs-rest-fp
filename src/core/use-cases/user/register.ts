import { CreateUser } from '@/core/types/user'
import { toError } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { chain, fromEither, TaskEither, tryCatch } from 'fp-ts/TaskEither'
import { validateUser } from './validate-user'

export type OutsideRegister<A> = (data: CreateUser) => Promise<A>

export type Register = <A>(outsideRegister: OutsideRegister<A>) =>
  (data: CreateUser) => TaskEither<Error, A>

export const register: Register = (outsideRegister) => data => {
  return pipe(
    data,
    validateUser,
    fromEither,
    chain(() => tryCatch(
      () => outsideRegister(data),
      toError,
    )),
  )
}
