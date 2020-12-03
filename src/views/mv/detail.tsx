import React, {useEffect, useState} from "react";
import {Container} from './style'
import {detailRequest, urlRequest, IDetail} from '../../api/mv'

const MvDetail = () => {
  const [url, setUrl] = useState('')
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
  return (
    <Container>
      <video src={url} controls={true} width='100%' poster={detail.coverUrl}/>
    </Container>
  )
}

export default React.memo(MvDetail)
