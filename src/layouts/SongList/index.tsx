import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {ITracks, ITrack} from "../../interface";
import {Container} from "./style"
import {RootState} from "../../store/reducer";
import {changeIndex, changePlayList, changeFullScreen} from "../../store/modules/player/actions";

interface InterfaceSongList {
  list: ITracks
}
const SongList = (props:InterfaceSongList)=>{
  const {list} = props
  const dispatch = useDispatch()
  const {playList} = useSelector((state: RootState) => ({
    playList: state.player.playList
  }));
  const play = (song: ITrack)=>{
    const index = playList.length
    dispatch(changePlayList({list: [song], type: 1}))
    dispatch(changeIndex(index))
    dispatch(changeFullScreen(true))
  }
  return (
    <Container>
      {
        list.map((i, index) => (
          <li key={i.id}>
            <img src={i.img} alt={i.name}/>
            <div className="center">
              <div className='name'>
                {i.name} <span> - {i.singer}</span>
              </div>
              <div className="album">{i.album}</div>
            </div>
            <div className="right"><i className='iconfont' onClick={()=>{play(i)}}>&#xe737;</i></div>
          </li>
        ))
      }
    </Container>
  )
}

export default React.memo(SongList)
