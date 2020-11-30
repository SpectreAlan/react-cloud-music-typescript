import {httpInstance} from "./axios"

export const getSongListRequest = <T = any>(id: number) => {
  return httpInstance.get<T>("/playlist/detail?id=" + id)
}

export const playListSubscribeRequest = <T = any>(id: number, t: number) => { // 添加/取消收藏歌单, t : 类型,1:收藏,2:取消收藏 id : 歌单 id
  return httpInstance.get<T>(`/playlist/subscribe?t=${t}&id=${id}`)
}

export const commentLikeRequest = <T = any>(id: number, t: number, type: number, cid: number) => { // 评论点赞
  /*
    t : 是否点赞 ,1 为点赞 ,0 为取消点赞
    type 0: 歌曲 1: mv 2: 歌单 3: 专辑 4: 电台 5: 视频 6: 动态
    cid : 评论 id
   */
  return httpInstance.get<T>(`/comment/like?id=${id}&cid=${cid}&t=${t}&type=${type}`)
}
