import { Dispatch } from "redux"

import * as api  from '../../api'
import { AuthActionTypes } from './authActionTypes';
import {
  IBackendRegisterErrorAction,
  IBackendSignInErrorAction,
  IRegisterRequest,
  ISignInRequest
} from './types'
import {persistenceService} from "../../shared/services/persistenceService"
import { API_ROOT } from "../../api"
import { Axios } from "../../shared/services/interceptor"

export const registerAction = (user: IRegisterRequest) => (
  async (dispatch: Dispatch) => {
    try {
      const { data } = await api.register(user)
      persistenceService.set('accessToken', data.user.token)
      dispatch({
        type: AuthActionTypes.USER_REGISTER,
        user: data.user
      })
    } catch (error) {
        dispatch({
          type: AuthActionTypes.USER_REGISTER_FAILURE,
          errors: error.response.data.errors,
      } as IBackendRegisterErrorAction)
    }
  }
)

export const signInAction = (user: ISignInRequest) => (
  async (dispatch: Dispatch) => {
    try {
      const res = await api.signin(user)
      persistenceService.set('accessToken', res.data.user.token)
      dispatch({  
        type: AuthActionTypes.USER_SIGNIN,
        user: res.data.user
      })
    } catch (error) {
        dispatch({
          type: AuthActionTypes.USER_SIGNIN_FAILURE,
          errors: error.response.data.errors,
        } as IBackendSignInErrorAction)
    }
  }
)

export const getLoadUser = () => (dispatch: Dispatch) => {
  try {
     Axios.get(`${API_ROOT}/user`)
       .then((res: any) => {
        dispatch({
          type: AuthActionTypes.USER_SIGNIN,
          user: res.data.user
        })
       })
    } catch (error) {
      console.log(error)
    }
  }






