import axios from 'axios'
import defaultSettings from '../config/settings'

const httpInstance = axios.create({
  baseURL: defaultSettings.baseUrl,
  withCredentials: true
})

httpInstance.interceptors.response.use(
  response => {
    const res = response.data
    if (response.data.code !== undefined && response.data.code !== 200) {
      return Promise.reject(res)
    } else {
      return response
    }
  },
  (error) => {
    if(error.response.data.code === 301){
      (window as any).location = '/#/login'
    }
    return Promise.reject(error)
  }
)

export {httpInstance}
