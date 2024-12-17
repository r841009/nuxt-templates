import axios, { type AxiosResponse } from "axios"
interface options{
    method: string,
    params?: object
}
export const  uesRequest = async (url:string, options: options): Promise<AxiosResponse<any, any>> => {
    const config = useRuntimeConfig();
    const URL = process.env.NODE_ENV === "production" ? config.public.API_BASE_PROD: config.public.API_BASE_DEV
    const apiClient = axios.create({
        baseURL: String(URL),
        timeout: 300000
    })
    if (options.method.trim().toUpperCase() === "GET"){
        return apiClient.get(url, {
            params: options.params
        })
    }
    else if (options.method.trim().toUpperCase() === "POST"){
        return apiClient.post(url, options.params, {
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
    else if (options.method.trim().toUpperCase() === "PUT"){
        return apiClient.put(url, options.params, {
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
    else if (options.method.trim().toUpperCase() === "PATCH"){
        return apiClient.patch(url, options.params, {
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
    else if (options.method.trim().toUpperCase() === "DELETE"){
        return apiClient.delete(url, {
            params: options.params
        })
    }
    else{
        throw new Error("Unsupported HTTP method");
    }
}