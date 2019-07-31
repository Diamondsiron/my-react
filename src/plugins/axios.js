import axios from 'axios'

const instance  = axios.create({
    xsrfCookieName:'xsrf-token'
})

instance.interceptors.request.use(config=>{
    let url = config.url
    url += url.indexOf('?') > -1 ? '&' : '?'
    url += `token=${window.sessionStorage.getItem('token')}`
    url += `&tenantCode=08d5f0c68cc94b94af8c9d1dee768cb9`
    config.url = url
    return config
},error=>{
    let resp = error.response.data
    console.log(resp,'请求错误')
})
// axios.onRequest(config=>{
//     let url = config.url
//     url += url.indexOf('?') > -1 ? '&' : '?'
//     url += `token=${window.sessionStorage.getItem('token')}`
//     url += `&tenantCode=08d5f0c68cc94b94af8c9d1dee768cb9`
//     config.url = url
//     return config
// })

// axios.onError(error => {
//     let resp = error.response.data
//     console.log(resp,'请求错误')
// })

export default instance