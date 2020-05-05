import request from './index'

export function regUser(userName, password) {
    return request({
        url: '/user/register',
        baseURL: 'http://localhost:3000',
        method: 'post',
        data: {
            userName,
            password
        }
    })
}