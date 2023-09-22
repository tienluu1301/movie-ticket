import axios from 'axios'
import { localServiceActions } from './localServices'
import { LOCAL_SERVICE_KEYS } from '../constant/common'

const fetcher = axios.create({
    baseURL: 'https://movienew.cybersoft.edu.vn/api',
    headers: {
        TokenCybersoft:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MiIsIkhldEhhblN0cmluZyI6IjIxLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwODQ3MzYwMDAwMCIsIm5iZiI6MTY4MTE0NjAwMCwiZXhwIjoxNzA4NjIxMjAwfQ.2JFd_iMYjvwU4SaKsLmL_x-kEZcKonddkHVR7z3Gxbc',
    },
})

//Interceptor
fetcher.interceptors.response.use(
    //Success
    (response) => response.data.content,

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
