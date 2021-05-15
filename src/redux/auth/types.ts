import { IBackendError } from "../../shared/BackenErrors/types"
import  { ICurrentUser }  from "../../shared/types/currentUser.interface"
import { AuthActionTypes } from './authActionTypes'

export interface IAuthState {
  currentUser: ICurrentUser | null
  isLoggedIn: boolean | null
  isSubmitting: boolean
  errors: IBackendError | null
}
export interface IRegisterRequest {
 user: {
   username: string, 
   email: string,
   password: string
 }
}
export interface ISignInRequest {
  user: {
    email: string,
    password: string
  }
}
export interface IAuthResponse {
  user: ICurrentUser
}
export interface ICurrentUserRegisterAction {
  type: AuthActionTypes.USER_REGISTER,
  user: IRegisterRequest
}
export interface ICurrentUserSignInAction {
  type: AuthActionTypes.USER_SIGNIN,
  user: ISignInRequest
}

export interface IBackendRegisterErrorAction {
  type: AuthActionTypes.USER_REGISTER_FAILURE,
  errors: IBackendError 
}
export interface IBackendSignInErrorAction {
  type: AuthActionTypes.USER_SIGNIN_FAILURE,
  errors: IBackendError 
}
export type Action = |
  ICurrentUserRegisterAction |
  IBackendRegisterErrorAction |
  ICurrentUserSignInAction |
  IBackendSignInErrorAction 
