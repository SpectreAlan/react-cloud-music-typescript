import {httpInstance} from "./axios"

export const getPlayUrl = (id: number) => {
  return httpInstance.get<number>("/song/url?id=" + id)
};

