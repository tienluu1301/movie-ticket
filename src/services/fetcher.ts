import axios, { AxiosResponse } from 'axios'
import { localServiceActions } from './localServices'
import { BASEURL, LOCAL_SERVICE_KEYS, TOKENCYBER } from '../constant/common'

const fetcher = axios.create({
    baseURL: BASEURL,
    headers: {
        TokenCybersoft: TOKENCYBER,
    },
})

//Interceptor
fetcher.interceptors.response.use(
    //Success
    (response) => response,

    //Error
    (error) => Promise.reject(error.response.data.content),
)

fetcher.interceptors.request.use(
    (config) => {
        //Authorization
        const { accessToken } =
            localServiceActions[LOCAL_SERVICE_KEYS.USER].get() || {}

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => Promise.reject(error),
)

export default fetcher
