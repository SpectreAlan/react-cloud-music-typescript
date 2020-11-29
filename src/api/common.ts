import {httpInstance} from "./axios"

export const getSongListRequest = <T = any>(id: number) => {
  return httpInstance.get<T>("/playlist/detail?id=" + id)
}

export const playListSubscribeRequest = <T = any>(id: number, t: number) => { // 添加/取消收藏歌单, t : 类型,1:收藏,2:取消收藏 id : 歌单 id
  return httpInstance.get<T>(`/playlist/subscribe?t=${t}&id=${id}`)
}
