import {httpInstance} from "./axios"

export const getMvRequest = (id: number) => {
  return httpInstance.post<number>("/video/group?id=" + id)
};

export const getTypesRequest = <T = any>() => {
  return httpInstance.get<T>("/video/group/list")
};

