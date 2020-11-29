import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {ListContainer} from './style'
import Scroll from "../../../components/scroll";
import {RootState} from "../../../store/reducer";
import {changePlayList, changeIndex, changeFullScreen, changePlayNext} from '../../../store/modules/player/actions'

interface InterfaceProps {
  handlePlayListVisible: Function
}

const PlayList = (props: InterfaceProps) => {
  const {handlePlayListVisible} = props
  const dispatch = useDispatch()
  const {index, playList} = useSelector((state: RootState) => ({
    index: state.player.index,
    playList: state.player.playList
  }));
  const del = (i: number) => {
    dispatch(changePlayList({index: i, type: -1}))
    if (i < index) {
      dispatch(changeIndex(index - 1))
      dispatch(changePlayNext(false))
    } else if (i === index) {
      dispatch(changePlayNext(true))
    } else {
      dispatch(changePlayNext(false))
    }
  }
  const clear = () => {
    dispatch(changeFullScreen(false))
    dispatch(changeIndex(-1))
    dispatch(changePlayList({type: 0}))
  }
  return (
    <ListContainer>
      <div className="content">
        <h3>当前播放<span>({playList.length})</span></h3>
        <div className="control">
          <span><i className='iconfont'>&#xe6e0;</i>收藏全部</span>
          <span onClick={clear}>清空播放列表<i className='iconfont'>&#xe63c;</i></span>
        </div>
        <div className="list">
          <Scroll>
            <ul>
              {
                playList.map((item, i) => (
                  <li key={i} className={index === i ? 'cur' : ''}>
                    <div onClick={() => dispatch(changeIndex(i))}>
                      {item.name}<span> - {item.singer}</span>
                    </div>
                    <i className='iconfont' onClick={() => del(i)}>&#xe63c;</i>
                  </li>
                ))
              }
            </ul>
          </Scroll>
        </div>
        <div className="close" onClick={() => handlePlayListVisible()}>关闭</div>
      </div>
      <div className="mask" onClick={() => handlePlayListVisible()}/>
    </ListContainer>
  )
}

export default React.memo(PlayList)
