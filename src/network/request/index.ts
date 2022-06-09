import axios from "axios"
import type { AxiosInstance } from "axios"
import type { RequestInterceptors, RequestConfig } from "./type"
import { userInfoStore } from "../../store"

// 定义网络请求的封装类
class Request {
    instance!: AxiosInstance
    interceptors?: RequestInterceptors
    constructor(config: RequestConfig) {
        this.instance = axios.create(config)
        this.interceptors = config.interceptors

        // 从config中取出的拦截器是对应的实例的拦截器
        // 只有new实例的时候有传入拦截器才有
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        )
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        )

        // 添加所有的实例都有的拦截器
        this.instance.interceptors.request.use(
            (config) => {
                config.headers!.Authorization = userInfoStore().getToken
                return config
            },
            (error) => {
                return error
            }
        )
        this.instance.interceptors.response.use(
            (response) => {
                // return response.data.code == 200 ? response : Promise.reject(response.data.message)
                return response
            },
            (error) => {
                return error
            }
        )
    }
    request<T>(config: RequestConfig<T>): Promise<T> {
        return new Promise((resovle, reject) => {
            // 在调用请求的时候添加额外单独的拦截器
            if (config.interceptors?.requestInterceptor) {
                config = config.interceptors.requestInterceptor(config)
            }
            this.instance
                .request<any, T>(config)
                .then((response) => {
                    if (config.interceptors?.responseInterceptor) {
                        response = config.interceptors.responseInterceptor(response)
                    }
                    resovle(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
    get<T>(config: RequestConfig<T>): Promise<T> {
        return this.request<T>({
            ...config,
            method: 'GET'
        })
    }
    post<T>(config: RequestConfig<T>): Promise<T> {
        return this.request<T>({
            ...config,
            method: 'POST'
        }) 
    }
    put<T>(config: RequestConfig<T>): Promise<T> {
        return this.request<T>({
            ...config,
            method: 'PUT'
        })
    }
    delete<T>(config: RequestConfig<T>): Promise<T> {
        return this.request<T>({
            ...config,
            method: 'DELETE'
        })
    }
}

export default Request