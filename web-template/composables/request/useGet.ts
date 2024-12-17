import {uesRequest} from "./useRequest"
export const useGet = async (url: string, params?: object) => {
    return uesRequest(url, {method: "GET", params: params});
}