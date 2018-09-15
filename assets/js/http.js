import axios from 'axios'
import {Message, Loading} from 'element-ui'

const service = axios.create({
  timeout: 10000,
  baseURL: '/api/',
  method: 'post'
})

// loading函数
const loading = {
  loadingTxt: '加载中...',
  length: 0,
  closeLength: 0,
  instantiation: false,
  open (txt) {
    txt = txt || this.loadingTxt
    this.length++
    this.instantiation = Loading.service({
      fullscreen: true,
      background: 'rgba(0, 0, 0, 0)',
      text: txt
    })
  },
  close () {
    if (++this.closeLength >= this.length && this.instantiation) {
      this.instantiation.close()
    }
  }
}

service.interceptors.request.use(params => {
  if (!params.data || (params.data && !params.data.hideLoading)) { loading.open(params.loadText) }
  params.headers['token'] = localStorage.token || ''
  return params
})

service.interceptors.response.use(response => {
  loading.close()
  let data = response.data
  if (data.code === 200) {
    return data.data
  }
  if (data.code === 401) {
    window.location.href = '/login'
  }
  let msg = data.code ? data.msg : `${response.config.headers['method']} : ${data.error}`

  data.message = msg
  return Promise.resolve(data)
}, error => {
  loading.close()
  if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
    error.msg = '请求超时，请重试'
  }
  Message({
    message: error.msg,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service
