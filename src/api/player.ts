import {httpInstance} from "./axios"

export const getPlayUrl = (id: number) => {
  return httpInstance.get<number>("/song/url?id=" + id)
};

export const likeRequest = <T = any>(id: number) => { // 添加/取消收藏歌单, t : 类型,1:收藏,2:取消收藏 id : 歌单 id
  return httpInstance.get<T>(`/like?id=${id}`)
}
