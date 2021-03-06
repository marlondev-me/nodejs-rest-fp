import { createUserCodec, CreateUser } from '@/core/types/user'
import { Either, mapLeft } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { failure } from 'io-ts/PathReporter'

type ValidateUser = (data: CreateUser) => Either<Error, unknown>

export const validateUser: ValidateUser = (data) => {
  return pipe(
    createUserCodec.decode(data),
    mapLeft(errors => new Error(failure(errors).join(':::'))),
  )
}
