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

export const singerRequest = <T = any>(type: singerType, area: areaType) => { // 歌手列表
  return httpInstance.get<T>(`/artist/list?type=${type}&area=${area}`)
}

export const hotSongsOfsingerRequest = <T = any>(id: number) => { // 歌手热门50首歌曲
  return httpInstance.get<T>(`/artist/top/song?id=${id}`)
}

export const songsOfsingerRequest = <T = any>(id: number) => { // 歌手全部歌曲
  return httpInstance.get<T>(`/artist/songs?id=${id}`)
}
export interface ISingerInfo {
  name: string;
  detailDescription: string;
  description: string;
  cover: string;
  briefDesc: string;
  albumSize: number;
  musicSize: number;
  id: number;
  mvSize: number;
  eventCount: number;
  followed: boolean;
  identifyTag: string[];
}
export const singerInfoRequest = <T = any>(id: string) => { // 歌手信息
  return httpInstance.get<T>(`/artist/detail?id=${id}`)
}

export const singerSongsRequest = <T = any>(id: number) => { // 歌手单曲
  return httpInstance.get<T>(`/artists?id=${id}`)
}

export const singerAlbumRequest = <T = any>(id: number) => { // 歌手专辑
  return httpInstance.get<T>(`/artist/album?limit=30&id=${id}`)
}
