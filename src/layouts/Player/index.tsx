import React, {useState, useRef, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store/reducer";
import {changePause, changeIndex, changeFullScreen} from '../../store/modules/player/actions'
import {getPlayUrl} from '../../utils'
import {playMode} from '../../config/player'
import Mini from './mini'
import Normal from './normal'

const Player = () => {
  const audioRef = useRef(null)
  const dispatch = useDispatch()
  const [currentTime, setCurrentTime] = useState(0)
  const [cover, setCover] = useState('')
  const [duration, setDuration] = useState(0)

  const {index, playList, pause, mode, fullScreen, playNext} = useSelector((state: RootState) => ({
    index: state.player.index,
    playList: state.player.playList,
    pause: state.player.pause,
    mode: state.player.mode,
    fullScreen: state.player.fullScreen,
    playNext: state.player.playNext
  }));

  useEffect(() => {
    if (!playList.length || index === -1 || !playList[index] || !playNext) {
      return
    }
    const song = playList[index];
    if (audioRef && audioRef.current) {
      // @ts-ignore
      audioRef.current.src = getPlayUrl(song.id);
      // @ts-ignore
      audioRef.current.autoplay = true;
    }
    dispatch(changePause(false));
    setCurrentTime(0);
    setCover(song.img)
    setDuration((song.duration / 1000) | 0);
  }, [index, playList]);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      // @ts-ignore
      pause ? audioRef.current.pause() : audioRef.current.play();
    }
  }, [pause])

  useEffect(() => {
    if (!playList.length) {
      dispatch(changeIndex(-1))
      dispatch(changeFullScreen(false))
    }
  }, [playList])
  const changeSong = (param: number) => {
    let i = -1
    const lastIndex = playList.length - 1
    switch (mode) {
      case playMode.sequence: // 顺序播放
        i = index + param
        i = i > lastIndex ? 0 : i
        i = i < 0 ? lastIndex : i
        break
      case playMode.random: // 随机播放
        i = parseInt(String(Math.random() * (lastIndex + 1)))
        break
      case playMode.loop: // 单曲循环
        // @ts-ignore
        audioRef.current.currentTime = 0;
        dispatch(changePause(false));
        // @ts-ignore
        audioRef.current.play();
        i = index
        break
    }
    dispatch(changeIndex(i))
  }
  const changeCurrentTime = (time: number) => {
    // @ts-ignore
    audioRef.current.currentTime = time
    if (pause) {
      dispatch(changePause(false))
      // @ts-ignore
      audioRef.current.play()
    }
  }
  const onError = () => {
    const i = (index === playList.length - 1) ? 0 : index + 1
    dispatch(changeIndex(i))
  }
  return (<>
    {
      index > -1 ?
        <>
          {
            !fullScreen ?
              <Mini img={cover} duration={duration} pause={pause} currentTime={currentTime}/> : ''
          }
          {
            fullScreen ?
              <Normal currentTime={currentTime} changeSong={changeSong} changeCurrentTime={changeCurrentTime}/> : ''
          }
          <audio
            ref={audioRef}
            onTimeUpdate={(audio: any) => setCurrentTime(audio.target.currentTime)}
            onEnded={() => {
              changeSong(1)
            }}
            onError={onError}
          />
        </> : ''
    }
  </>)
}

export default React.memo(Player)
