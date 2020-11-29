import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {ListContainer} from './style'
import Scroll from "../../../components/scroll";
import {RootState} from "../../../store/reducer";
import {changePlayList, changeIndex} from '../../../store/modules/player/actions'

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
    if (i <= index) {
      dispatch(changeIndex(index - 1))
    }
    if (i === playList.length - 1) {
      dispatch(changeIndex(0))
    }
    dispatch(changePlayList({index: i, type: -1}))
  }
  return (
    <ListContainer>
      <div className="content">
        <h3>当前播放<span>({playList.length})</span></h3>
        <div className="control">
          <span><i className='iconfont'>&#xe6e0;</i>收藏全部</span>
          <span onClick={() => dispatch(changePlayList({type: 0}))}>清空播放列表<i className='iconfont'>&#xe63c;</i></span>
        </div>
        <div className="list">
          <Scroll>
            <ul>
              {
                playList.map((item, i) => (
                  <li key={i} className={index === i ? 'cur' : ''}>
                    <div onClick={() => dispatch(changeIndex(i))} className='title'>
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
