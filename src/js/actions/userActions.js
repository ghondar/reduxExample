import { SAVE_USER } from '../constants/ActionsTypes'

export function setUser(user){
  return {
    type: SAVE_USER,
    user
  }
}