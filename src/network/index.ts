import Request from "./request"

// network的统一出口
const RequestInstance = new Request({
    baseURL: '',
    timeout: 5000,
    interceptors: {
        requestInterceptor: (config) => {
            return config
        },
        requestInterceptorCatch: (error) => {
            return error
        },
        responseInterceptor: (config) => {
            return config
        },
        responseInterceptorCatch: (error) => {
            return error
        }
    }
})

// 没有有传入特有拦截器的实例
const RequestParam = new Request({
    baseURL: '',
    timeout: 5000
})

export { RequestInstance, RequestParam }