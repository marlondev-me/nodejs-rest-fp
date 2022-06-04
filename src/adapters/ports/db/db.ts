import { OutsideRegisterType } from '@/adapters/use-cases/user/register-adapter'
import { outsideRegister } from '@/ports/db-in-memory/db'

export const userRegister: OutsideRegisterType = (data) => {
  return outsideRegister(data)
}
