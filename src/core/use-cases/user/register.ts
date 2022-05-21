import { CreateUser } from '@/core/types/user'
import { toError } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { TaskEither, tryCatch } from 'fp-ts/TaskEither'

export type OutsideRegister<A> = (data: CreateUser) => Promise<A>

type Register = <A>(outsideRegister: OutsideRegister<A>) => (data: CreateUser) => TaskEither<Error, A>

export const register: Register = (outsideRegister) => data => {
  return pipe(
    tryCatch(
      () => outsideRegister(data),
      toError,
    ),
  )
}
