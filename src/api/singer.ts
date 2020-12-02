import {httpInstance} from "./axios";

export enum singerType {
  '全部类型' = -1,
  '男歌手' = 1,
  '女歌手' = 2,
  '乐队' = 3
}

export enum areaType {
  '所有地区' = -1,
  '其他' = 0,
  '华语' = 7,
  '日本' = 8,
  '韩国' = 16,
  '欧美' = 96,
}
export interface ISinger {
  name: string;
  id: number;
  picUrl: string;
  alias: string[]
}
export type ISingers = ISinger[]
export const singerRequest = <T = any>(type: singerType, area: areaType) => {
  return httpInstance.get<T>(`/artist/list?type=${type}&area=${area}`)
}
