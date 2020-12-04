import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router';
import {detailRequest, urlRequest, IDetail} from '../../api/mv'
import Comments from '../../layouts/comments'

const MvDetail = () => {
  const [url, setUrl] = useState('')
  const router = useHistory()
  const [detail, setDetail] = useState<IDetail>({
    nickname: '',
    coverUrl: '',
    avatarUrl: '',
    title: '',
    praisedCount: 0,
    commentCount: 0,
    shareCount: 0,
    subscribeCount: 0,
    publishTime: 0,
    description: 0
  })
  useEffect(() => {
    urlRequest().then((res: any) => {
      setUrl(res.data.urls[0].url)
    })
    detailRequest().then((res: any) => {
      const {creator, title, praisedCount, commentCount, shareCount, subscribeCount, publishTime, description, coverUrl} = res.data.data
      const {nickname, avatarUrl} = creator
      setDetail({
        coverUrl,
        title,
        praisedCount,
        commentCount,
        shareCount,
        subscribeCount,
        publishTime,
        description,
        nickname,
        avatarUrl
      })
    })
  }, [])
  const vid = sessionStorage.getItem('vid') || ''
  return (
    <Comments commentType={5} handleBack={()=>router.go(-1)} id={vid} title={detail.title} height='300px'>
      <video src={url} controls={true} width='336px' height='204px' poster={detail.coverUrl}/>
    </Comments>
  )
}

export default React.memo(MvDetail)
