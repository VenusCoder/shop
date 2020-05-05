import axios from 'axios'

export default function request(config) {
    const instance = axios.create({
        baseURL: 'http://mock-api.com/wz2l3mnL.mock',
        localURL: 'http://localhost:3000',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })
    instance.interceptors.response.use(res => {
        return res
    }, err => {
        console.log(err)
    })
    return instance(config)
}