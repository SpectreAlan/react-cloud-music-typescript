import React, {useEffect, useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "./style";
import {changeFullScreen, changePause, changeMode} from '../../../store/modules/player/actions'
import {RootState} from "../../../store/reducer";
import {formatDuration} from '../../../utils'

interface InterfaceProps {
  currentTime: number;
  changeSong: Function
}

const NormalPlayer = (props: InterfaceProps) => {

  const {index, playList, pause, mode} = useSelector((state: RootState) => ({
    index: state.player.index,
    playList: state.player.playList,
    pause: state.player.pause,
    mode: state.player.mode,
  }));

  const {currentTime, changeSong} = props
  const progressRef = useRef(null)
  const dispatch = useDispatch()
  const [left, setLeft] = useState(0)
  const [width, setWidth] = useState(230)

  useEffect(() => {
    const duration = playList[index].duration
    const l = 1000 * width * currentTime / duration
    setLeft(l)
  }, [currentTime])

  useEffect(() => {
    if (progressRef && progressRef.current) {
      // @ts-ignore
      setWidth(progressRef.current.offsetWidth)
    }
  }, [])

  const hide = () => { // 关闭全屏播放器
    dispatch(changeFullScreen(false))
  }

  const handleChangeMode = () => { // 切换播放模式
    const m = mode === 2 ? 0 : mode + 1
    dispatch(changeMode(m))
  }

  const song = playList[index]
  return (
    <Container img={song.img} pause={pause}>
      <div className="content">
        <div className="top">
          <i className='iconfont' onClick={hide}>&#xe63a;</i>
          <div className="center">
            <span>{song.name}</span>
            <p>{song.singer}</p>
          </div>
          <i className='iconfont' onClick={hide}>&#xe65c;</i>
        </div>
        <div className='rotate'>
          <img src={song.img} alt="music"/>
        </div>
        <div className="bottom">
          <div className="icons">
            <i className='iconfont' onClick={hide}>&#xe688;</i>
            <i className='iconfont' onClick={hide}>&#xe626;</i>
            <i className='iconfont' onClick={hide}>&#xe865;</i>
            <i className='iconfont' onClick={hide}>&#xe71f;</i>
          </div>
          <div className="progress">
            <span className='currentTime'>{formatDuration(currentTime * 1000)}</span>
            <div className="line" ref={progressRef}>
              <i className='circle' style={{left: left}}/>
            </div>
            <span className='duration'>{formatDuration(song.duration)}</span>
          </div>
          <div className="control">
            <i className='iconfont' onClick={handleChangeMode}
               dangerouslySetInnerHTML={{__html: ['&#xe60a;', '&#xe66d;', '&#xe77d;'][mode]}}/>
            <i className='iconfont' onClick={() => changeSong(-1)}>&#xe800;</i>
            <i className='iconfont' onClick={() => dispatch(changePause(!pause))}
               dangerouslySetInnerHTML={{__html: pause ? '&#xe61a;' : '&#xe774;'}}/>
            <i className='iconfont' onClick={() => changeSong(1)}>&#xe7ff;</i>
            <i className='iconfont' onClick={hide}>&#xe6a7;</i>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default React.memo(NormalPlayer)
