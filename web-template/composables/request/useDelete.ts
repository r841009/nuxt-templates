import {uesRequest} from "./useRequest"
export const useDelete = async (url: string, params?: object) => {
    return uesRequest(url, {method: "DELETE", params: params});
}