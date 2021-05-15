import axios from "axios"
import {
  IAuthResponse,
  IRegisterRequest,
  ISignInRequest
} from "./redux/auth/types"
import { IGetFeedResponse } from "./redux/feed/types"
import { IGetTags } from "./redux/tags/types"
import { Axios } from "./shared/services/interceptor"

export const API_ROOT: string = 'https://conduit.productionready.io/api'

export const url: string = '/articles'

export const limit: number = 10

export const register = async (user: IRegisterRequest) =>
  await axios.post<IAuthResponse>(`${API_ROOT}/users`, user)

export const signin = async (user: ISignInRequest) =>
  await axios.post<IAuthResponse>(`${API_ROOT}/users/login`, user)
  
export const getTags = async () => {
  const fullUrl = `${API_ROOT}/tags`
  return await axios.get<IGetTags>(fullUrl)
}

export const getFeeds = (url: string) => {
  const fullUrl = `${API_ROOT}` + url
  return Axios.get<IGetFeedResponse>(fullUrl)
}



