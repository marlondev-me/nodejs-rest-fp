import { Email } from '@/core/types/scalar'
import { pipe } from 'fp-ts/function'
import { TaskEither, map, mapLeft } from 'fp-ts/TaskEither'

export function unsafeEmail (value:string): Email {
  return value as any
}

type Callback = (a: unknown) => unknown

type MapAll = (fn: Callback) => (data: TaskEither<unknown, unknown>) => TaskEither<unknown, unknown>
export const mapAll: MapAll = (fn) => (data) => {
  return pipe(
    data,
    map(fn),
    mapLeft(fn),
  )
}
