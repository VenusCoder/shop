import request from './index'

export function login(userName, password) {
    return request({
        url: '/user/login',
        baseURL: 'http://localhost:3000',
        method: 'post',
        data: {
            userName,
            password
        }
    })
}