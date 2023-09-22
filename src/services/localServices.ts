import { LOCAL_SERVICE_KEYS } from '../constant/common'
import { IUser } from '../types/user.interface'

const user = {
    set: (data: IUser) => {
        localStorage.setItem(LOCAL_SERVICE_KEYS.USER, JSON.stringify(data))
    },
    get: () => {
        return JSON.parse(localStorage.getItem(LOCAL_SERVICE_KEYS.USER) || '{}')
    },
    remove: () => {
        localStorage.removeItem(LOCAL_SERVICE_KEYS.USER)
    },
}

export const localServiceActions = {
    [LOCAL_SERVICE_KEYS.USER]: user,
}
