import React, {useEffect, useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "./style";
import {changeFullScreen, changePause, changeMode} from '../../../store/modules/player/actions'
import {RootState} from "../../../store/reducer";
import {formatDuration} from '../../../utils'
import PlayList from "./playList";
import {likeRequest} from '../../../api/player'
import Comment from "../../../views/comment";
import {CommentType} from '../../../interface'

interface InterfaceProps {
  currentTime: number;
  changeSong: Function;
  changeCurrentTime: Function;
  url: string;
}

const NormalPlayer = (props: InterfaceProps) => {

  const {index, playList, pause, mode} = useSelector((state: RootState) => ({
    index: state.player.index,
    playList: state.player.playList,
    pause: state.player.pause,
    mode: state.player.mode
  }));

  const {currentTime, changeSong, changeCurrentTime, url} = props
  const progressRef = useRef(null)
  const dispatch = useDispatch()
  const [left, setLeft] = useState(0)
  const [comment, setComment] = useState(false)
  const [width, setWidth] = useState(230)
  const [touching, setTouching] = useState(false)
  const [playListVisible, setPlayListVisible] = useState(false)

  useEffect(() => {
    if (!touching) { // 非拖拽状态正常渲染进度条
      const duration = playList[index].duration
      const l = 1000 * width * currentTime / duration
      setLeft(l)
    }
  }, [currentTime])

  useEffect(() => { // 获取进度条长度
    if (progressRef && progressRef.current) {
      // @ts-ignore
      setWidth(progressRef.current.offsetWidth)
    }
  }, [])

  const hide = () => { // 关闭全屏播放器
    dispatch(changeFullScreen(false))
  }

  const handleProgressClick = (e: any) => { // 点击切换播放进度
    // 鼠标点击坐标 = 鼠标相对Document点击的x轴坐标 - 进度条相对Document的偏移量
    // @ts-ignore
    const offsetWidth = e.pageX - progressRef.current.getBoundingClientRect().left - 4
    setLeft(offsetWidth)
    const duration = playList[index].duration
    const time = duration * offsetWidth / 1000 / width
    changeCurrentTime(time)
  };

  const handleChangeMode = () => { // 切换播放模式
    const m = mode === 2 ? 0 : mode + 1
    dispatch(changeMode(m))
  }
  const onTouchStart = (e: any) => {
    setTouching(true)
  }
  const onTouchMove = (e: any) => {
    // @ts-ignore
    let x = e.touches[0].pageX - progressRef.current.getBoundingClientRect().left - 4
    x = x < 0 ? 0 : x
    x = x > width ? width : x
    setLeft(x)
  }
  const onTouchEnd = () => {
    const duration = playList[index].duration
    const time = duration * left / 1000 / width
    changeCurrentTime(time)
    setTouching(false)
  }
  const handlePlayListVisible = () => {
    setPlayListVisible(!playListVisible)
  }
  const like = (id: number) => {
    likeRequest(id).then(res => {
      console.log(res.data)
    })
  }
  const download = () => {
    window.open(url)
  }
  const handleComment = ()=>{
    setComment(!comment)
  }
  const song = playList[index]
  return (
    <>
      {
        song ? <Container img={song.img} pause={pause}>
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
                <i className='iconfont' onClick={() => like(song.id)}>&#xe688;</i>
                <i className='iconfont' onClick={download}>&#xe626;</i>
                <i className='iconfont' onClick={handleComment}>&#xe865;</i>
                <i className='iconfont' onClick={hide}>&#xe71f;</i>
              </div>
              <div className="progress">
                <span className='currentTime'>{formatDuration(currentTime * 1000)}</span>
                <div className="line" ref={progressRef} onClick={handleProgressClick}>
                  <i
                    className='circle'
                    style={{left: left}}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  />
                </div>
                <span className='duration'>{formatDuration(song.duration)}</span>
              </div>
              <div className="control">
                <i className='iconfont' onClick={handleChangeMode}
                   dangerouslySetInnerHTML={{__html: ['&#xe60a;', '&#xe66d;', '&#xe77d;'][mode]}}/>
                <i className='iconfont' onClick={() => changeSong(-1)}>&#xe800;</i>
                <i className='iconfont' onClick={() => dispatch(changePause(!pause))}
                   dangerouslySetInnerHTML={{__html: pause ? '&#xe774;' : '&#xe61a;'}}/>
                <i className='iconfont' onClick={() => changeSong(1)}>&#xe7ff;</i>
                <i className='iconfont' onClick={handlePlayListVisible}>&#xe6a7;</i>
              </div>
            </div>
          </div>
          {
            playListVisible ? <PlayList handlePlayListVisible={handlePlayListVisible}/> : ''
          }
        </Container> : ''
      }
      {comment ? <Comment info={{name: song.name,id: song.id,img: song.img, creator: song.singer}} commentType={CommentType.music} handleComment={handleComment}/> : ''}
    </>
  )
}

export default React.memo(NormalPlayer)
