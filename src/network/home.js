import request from './index'

export function getHomeData() {
    return request({
        url: '/api/index'
    })
}