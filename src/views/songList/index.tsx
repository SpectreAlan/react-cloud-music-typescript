import React, {useEffect, useState} from "react"
import SongListPage from '../../layouts/SongListPage'
import Loading from '../../components/loading'
import {getSongListRequest} from "../../api/common"
import {getName} from "../../utils"
import {ISongListProps, ITracks} from '../../interface'

const DailyRecommendation = (props: any) => {
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
    subscribedCount: 0,
    id: -1
  })
  useEffect(() => {
    setLoading(true)
    getSongListRequest(props.location.state.id).then(res => {
      const {tracks, coverImgUrl, name, creator, trackCount, shareCount, commentCount, subscribedCount, subscribed, id} = res.data.playlist
      const {avatarUrl, nickname} = creator
      const list: ITracks = []
      // eslint-disable-next-line array-callback-return
      tracks.map((item: any) => {
        list.push({
          id: item.id,
          url: item.rt,
          img: item.al.picUrl,
          duration: item.dt,
          name: item.name,
          album: item.al.name,
          singer: getName(item.ar)
        })
      })
      setInfo({tracks: list, coverImgUrl, name, creator: nickname, avatarUrl, trackCount, shareCount, commentCount, subscribedCount, subscribed, id})
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
