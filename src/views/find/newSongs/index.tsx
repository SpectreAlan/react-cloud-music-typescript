import React from 'react'
import {ITracks, ITrack} from "../../../interface";
import {Container} from './style'
import Slider from '../../../components/slider'
import SongsList from '../../../layouts/SongList'

interface NewSongsInterface {
  list: ITracks;
}

const NewSongs = (props: NewSongsInterface) => {
  const {list} = props
  const songs: ITracks[] = []
  let cur: ITrack[] = []
  for (let i = 0; i < list.length; i++) {
    cur.push({...list[i]})
    if (cur.length === 3) {
      songs.push([...cur, ...[]])
      cur = []
    }
  }
  return (
    <Container>
      <div className="top">
        <h3>新歌</h3>
        <div>更多新歌</div>
      </div>
      <Slider count={list.length} interval={6000} autoplay={true}>
        {
          songs.map((item, index) => (
            <div className="slide-page" key={index}>
              <SongsList list={item}/>
            </div>
          ))
        }
      </Slider>
    </Container>
  )
}

export default React.memo(NewSongs)
