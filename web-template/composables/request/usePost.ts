import {uesRequest} from "./useRequest"
export const usePost = async (url: string, params?: object) => {
    return uesRequest(url, {method: "POST", params: params});
}