import React, {useEffect, useState} from "react";
import {ITracks} from "../../interface";
import {getName} from "../../utils";
import {singerISongsRequest} from "../../api/singer";
import SongList from "../../layouts/SongList";
import Loading from "../../components/loading";

interface InterfaceProps {
  id: number;
  refresh: Function
}

const SingerSongs = (props: InterfaceProps) => {
  const {id, refresh} = props
  const [singerSongs, setSingerSongs] = useState<ITracks>([])
  const [loading, setLOading] = useState(false)
  useEffect(() => {
    setLOading(true)
    singerISongsRequest(id).then(res => {
      const list: ITracks = []
      const {hotSongs} = res.data
      // eslint-disable-next-line array-callback-return
      hotSongs.map((item: any) => {
        list.push({
          name: item.name,
          id: item.id,
          url: item.mp3Url,
          img: item.al.picUrl,
          duration: item.duration,
          singer: getName(item.ar),
          album: item.al.name
        })
      })
      setSingerSongs(list)
      setTimeout(()=>{
        refresh()
      },200)
      setLOading(false)
    })
  }, [])
  return <>
    {
      loading ? <Loading/> : <SongList list={singerSongs}/>
    }
  </>
}

export default React.memo(SingerSongs)
