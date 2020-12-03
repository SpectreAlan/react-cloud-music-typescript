import {httpInstance} from "./axios"

export const hotRequest = () => {
  return httpInstance.post<number>('/search/hot')
};

export const searchRequest = <T = any>(keywords:string) => {
  return httpInstance.get<T>(`/cloudsearch?keywords=${keywords}`)
};

