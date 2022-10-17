import axios from 'axios'

export const http = axios.create({
  baseURL: process.env.SERVER_API_URL,
  timeout: 6000,
})
//isBrowser = true
const isBrowser = typeof window !== 'undefined'
//interceptors axios拦截器
http.interceptors.request.use(
  // 在发送请求之前做些什么
  config => {
    // console.log('请求拦截器入参config:', config)
    if (isBrowser) {
      const token = window.localStorage.getItem('token')
      // console.log('请求拦截器token:', token)
      if (config && config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  // 对请求错误做些什么
  () => {
    throw new Error('发起请求出错')
  }
)

http.interceptors.response.use(
  res => {
    // console.log('响应拦截器:', res)
    return res.data
  },
  err => {
    if (err && err.response && err.response.status) {
      // console.log('响应拦截器err:', err)
      const status = err.response.status

      switch (status) {
        case 400:
        case 404:
        case 504:
          isBrowser &&
            console.error(
              (err.response && err.response.data && err.response.data.msg) ||
                '服务器异常'
            )
          break

        default:
          isBrowser &&
            console.error(
              (err.response && err.response.data && err.response.data.msg) ||
                '未知错误!'
            )
          break
      }
      return Promise.reject({
        statusCode: err.response.status,
        message: err.response.data.msg,
      })
    }

    return Promise.reject(err)
  }
)
