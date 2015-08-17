import { SAVE_USER } from '../constants/ActionsTypes'

export default function userStore(user = '', action){
  switch(action.type){
    case SAVE_USER:
      return action.user
    default:
      return user
  }
}