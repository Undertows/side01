import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

export const httpProvider = axios.create({
  baseURL: process.env.SERVER_API_URL,
  timeout: 60000,
})
//isBrowser = true
const isBrowser = typeof window !== 'undefined'
//interceptors axios拦截器
httpProvider.interceptors.request.use(
  // 在发送请求之前做些什么
  (config: AxiosRequestConfig) => {
    if (isBrowser) {
      const token = window.localStorage.getItem('token')
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

httpProvider.interceptors.response.use(
  (
    value: AxiosResponse<{
      statusCode: number
      success: boolean
      msg: string | null
      data: unknown //value.data.data 。。。
    }>
  ) => {
    // res=value.data
    const res = value.data
    if (!res.success) {
        console.log(res)
      console.log(res.msg + ' failed')
      return res.msg
    }
    return res.msg + ' data successfully'
  },
  err => {
    if (err && err.response && err.response.status) {
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
