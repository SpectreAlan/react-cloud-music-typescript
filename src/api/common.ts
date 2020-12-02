import {httpInstance} from "./axios"
import {CommentType} from '../interface'
export const getSongListRequest = <T = any>(id: number) => {
  return httpInstance.get<T>("/playlist/detail?id=" + id)
}

export const playListSubscribeRequest = <T = any>(id: number, t: number) => { // 添加/取消收藏歌单, t : 类型,1:收藏,2:取消收藏 id : 歌单 id
  return httpInstance.get<T>(`/playlist/subscribe?t=${t}&id=${id}`)
}

export const commentLikeRequest = <T = any>(id: number, t: number, commentType: CommentType, cid: number) => { // 评论点赞
  /*
    t : 是否点赞 ,1 为点赞 ,0 为取消点赞
    type 0: 歌曲 1: mv 2: 歌单 3: 专辑 4: 电台 5: 视频 6: 动态
    cid : 评论 id
   */
  return httpInstance.get<T>(`/comment/like?id=${id}&cid=${cid}&t=${t}&type=${commentType}`)
}
export const commentRequest = <T = any>(id: number, commentType: CommentType, content: string) => { // 添加评论
  /*
    id:对应资源 id
    content :要发送的内容
   */
  return httpInstance.get<T>(`/comment?t=1&type=${commentType}&id=${id}&content=${content}`)
}

export const commentsRequest = <T = any>(id: number, type: CommentType) => { // 获取评论列表， id，offset，limit
  return httpInstance.get<T>(`/comment/${CommentType[type]}?id=${id}`)
}

export const toplistRequest = <T = any>() => { // 排行榜
  return httpInstance.get<T>(`/toplist`)
}

