import {httpInstance} from "./axios"

export const detailRequest = (cat: string) => {
  return httpInstance.get<number>("/top/playlist?limit=20&order=new&cat=" + cat)
};

export const navRequest = <T = any>() => {
  return httpInstance.get<T>(`/playlist/catlist`)
}
