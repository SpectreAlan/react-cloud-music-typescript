import React, {useEffect, useState} from "react";
import {useSelector} from 'react-redux'
import SongListPage from '../../layouts/SongListPage'
import Loading from '../../components/loading'
import {ISongListProps, ITracks} from '../../interface'
import {RootState} from "../../store/reducer";
import {getName} from "../../utils";
import {getDailyRecommendationRequest} from "../../api/user";

const DailyRecommendation = () => {
  const [loading, setLoading] = useState(false)
  const [info, setInfo] = useState<ISongListProps>({
    tracks: [],
    trackCount: 0,
    shareCount: 0,
    commentCount: 0,
    name: '',
    coverImgUrl: '',
    creator: '',
    avatarUrl: '',
    subscribed: false,
    subscribedCount: 0
  })
  const {avatar, backgroundUrl} = useSelector((state: RootState) => ({
    avatar: state.user.info.avatarUrl,
    backgroundUrl: state.user.info.backgroundUrl
  }));
  useEffect(() => {
    setLoading(true)
    getDailyRecommendationRequest().then(res => {
      const data = res.data.data.dailySongs
      const tracks: ITracks = []
      // eslint-disable-next-line array-callback-return
      data.map((item: any) => {
        tracks.push({
          id: item.id,
          url: item.rt,
          img: item.al.picUrl,
          duration: item.dt,
          name: item.name,
          album: item.al.name,
          singer: getName(item.ar)
        })
      })
      const time = new Date()
      const creator = `${time.getFullYear()}-${1 + time.getMonth()}-${time.getDate()}`
      setInfo({
        tracks,
        coverImgUrl: backgroundUrl,
        name: '根据您的喜好推荐',
        creator,
        avatarUrl: avatar,
        trackCount: tracks.length,
        shareCount: 0,
        commentCount: 0,
        subscribedCount: 0,
        subscribed: false
      })
      setLoading(false)
    })
  }, [])
  return (
    <>
      {
        loading ?
          <Loading/> :
          <SongListPage info={info}/>
      }
    </>
  )
}

export default React.memo(DailyRecommendation);
