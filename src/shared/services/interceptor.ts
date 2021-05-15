import axios from 'axios'
import { persistenceService } from './persistenceService'

export const Axios = axios.create()

Axios.interceptors.request.use((request: any) => {
  const token = persistenceService.get('accessToken')
  request.headers = {
      Authorization: token ? `Token ${token}` : ''
  }
  return request
}, error => {
    return Promise.reject(error)
  }
)
