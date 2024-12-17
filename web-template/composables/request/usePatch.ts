import {uesRequest} from "./useRequest"
export const usePatch = async (url: string, params?: object) => {
    return uesRequest(url, {method: "PATCH", params: params});
}