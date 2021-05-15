import { persistenceService } from "../../shared/services/persistenceService"
import { Action, IAuthState } from "./types"
import { AuthActionTypes } from './authActionTypes'

const initialState: IAuthState = {
  currentUser: null,
  isLoggedIn: null,
  isSubmitting: true,
  errors: null
}

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case AuthActionTypes.USER_REGISTER_FAILURE:
    case AuthActionTypes.USER_SIGNIN_FAILURE:
      persistenceService.remove('accessToken')
      return {
        ...state,
        currentUser: null,
        isSubmitting: false,
        isLoggedIn: false,
        errors: action.errors,
      } as IAuthState
    case AuthActionTypes.USER_REGISTER:
    case AuthActionTypes.USER_SIGNIN:
      return {
        ...state,
        currentUser: action.user,
        isSubmitting: true,
        isLoggedIn: true,
        errors: null,
      }
    default: 
      return state
   }
}

