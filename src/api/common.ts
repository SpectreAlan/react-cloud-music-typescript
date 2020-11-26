import { httpInstance } from "./axios";

export const getSongListRequest = <T=any>(id:number) => {
  return httpInstance.get<T>("/playlist/detail?id=" + id);
};

