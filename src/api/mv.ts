import {httpInstance} from "./axios"

export const getMvRequest = (id: number) => {
  return httpInstance.post<number>("/video/group?id=" + id)
};

export const getTypesRequest = <T = any>() => {
  return httpInstance.get<T>("/video/group/list")
};

export const detailRequest = <T = any>() => {
  const vid = sessionStorage.getItem('vid')
  return httpInstance.get<T>('/video/detail?id=' + vid)
};

export interface IDetail {
  nickname: string;
  avatarUrl: string;
  coverUrl: string;
  title: string;
  praisedCount: number;
  commentCount: number;
  shareCount: number;
  subscribeCount: number;
  publishTime: number;
  description: number;
}

export const urlRequest = <T = any>() => {
  const vid = sessionStorage.getItem('vid')
  return httpInstance.get<T>('/video/url?id=' + vid)
};

