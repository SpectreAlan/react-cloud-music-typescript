import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {ListContainer} from './style'
import Scroll from "../../../components/scroll";
import {RootState} from "../../../store/reducer";
import {changePlayList} from '../../../store/modules/player/actions'

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
  const del = (index: number) => {
    dispatch(changePlayList({index, type: -1}))
  }
  return (
    <ListContainer>
      <div className="content">
        <h3>当前播放<span>({playList.length})</span></h3>
        <div className="control">
          <span><i className='iconfont'>&#xe6e0;</i>收藏全部</span>
          <span>清空播放列表<i className='iconfont'>&#xe63c;</i></span>
        </div>
        <div className="list">
          <Scroll>
            <ul>
              {
                playList.map((item, i) => (
                  <li key={i} className={index === i ? 'cur' : ''}>
                    <div>
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
