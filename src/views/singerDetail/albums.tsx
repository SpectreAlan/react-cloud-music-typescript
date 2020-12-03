import React, {useEffect, useState} from "react";
import { singerAlbumRequest} from "../../api/singer";
import {AlbumContainer} from './style'
import Loading from "../../components/loading";
import LazyLoad from 'react-lazyload'
import {formatDate} from '../../utils'
import {useHistory} from "react-router";

interface InterfaceProps {
  id: number;
  refresh: Function
}

interface InterfaceAlbum {
  name: string;
  id: number;
  img: string;
  size: number;
  publishTime: number;
}

const SingerSongs = (props: InterfaceProps) => {
  const {id, refresh} = props
  const [albums, setAlbums] = useState<InterfaceAlbum[]>([])
  const [loading, setLoading] = useState(false)
  const router = useHistory()
  useEffect(() => {
    setLoading(true)
    singerAlbumRequest(id).then(res => {
      const list: InterfaceAlbum[] = []
      const {hotAlbums} = res.data
      // eslint-disable-next-line array-callback-return
      hotAlbums.map((item: any) => {
        list.push({
          name: item.name,
          id: item.id,
          img: item.picUrl,
          size: item.size,
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
  const go = (id:number)=>{
    // sessionStorage.setItem('songListId', String(id))
    // router.push('/songList')
  }
  return <>
    {
      loading ? <Loading/> :
        <AlbumContainer>
          {
            albums.map((item:InterfaceAlbum)=><li key={item.id}  onClick={()=>go(item.id)}>
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
                  {formatDate(item.publishTime)} <span> {item.size} 首</span>
                </p>
              </div>
            </li>)
          }
        </AlbumContainer>
    }
  </>
}

export default React.memo(SingerSongs)
