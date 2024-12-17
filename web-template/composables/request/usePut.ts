import {uesRequest} from "./useRequest"
export const usePut = async (url: string, params?: object) => {
    return uesRequest(url, {method: "PUT", params: params});
}