import React, {useEffect, useState} from "react";
import { singerMvRequest} from "../../api/singer";
import {MvContainer} from './style'
import Loading from "../../components/loading";
import LazyLoad from 'react-lazyload'
import {getCount, formatDuration} from '../../utils'

interface InterfaceProps {
  id: number;
  refresh: Function
}

interface InterfaceAlbum {
  name: string;
  id: number;
  playCount: number;
  duration: number;
  img: string;
  publishTime: string;
}

const SingerSongs = (props: InterfaceProps) => {
  const {id, refresh} = props
  const [albums, setAlbums] = useState<InterfaceAlbum[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    singerMvRequest(id).then(res => {
      const list: InterfaceAlbum[] = []
      const {mvs} = res.data
      // eslint-disable-next-line array-callback-return
      mvs.map((item: any) => {
        list.push({
          name: item.name,
          id: item.id,
          img: item.imgurl,
          duration: item.duration,
          playCount: item.playCount,
          publishTime: item.publishTime
        })
      })
      setAlbums(list)
      setTimeout(() => {
        refresh()
      }, 200)
      setLoading(false)
    })
  }, [])
  return <>
    {
      loading ? <Loading/> :
        <MvContainer>
          {
            albums.map((item:InterfaceAlbum)=><li key={item.id}>
              <LazyLoad
                overflow
                placeholder={
                  <img width="104px" height="104px" src={require('../../assets/images/music.png')} alt="music"/>
                }
              >
                <img src={item.img} alt={item.name}/>
              </LazyLoad>
              <div className="info">
                <span>{item.name}</span>
                <p>
                  {item.publishTime} <span> {formatDuration(item.duration)}</span>
                </p>
              </div>
              <div className="play">
                <i className='iconfont'>&#xe774;</i>
                {getCount(item.playCount)}
              </div>
            </li>)
          }
        </MvContainer>
    }
  </>
}

export default React.memo(SingerSongs)
