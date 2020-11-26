import React, {useState, useRef, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store/reducer";
import {changePause, changeIndex} from '../../store/modules/player/actions'
import {getPlayUrl} from '../../utils'
import {playMode} from '../../config/player'
import Mini from './mini'

const Player = () => {
  const audioRef = useRef(null)
  const dispatch = useDispatch()
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const {index, playList, pause, mode} = useSelector((state: RootState) => ({
    index: state.player.index,
    playList: state.player.playList,
    pause: state.player.pause,
    mode: state.player.mode,
  }));
  useEffect(() => {
    if (!playList.length || index === -1 || !playList[index]) {
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
    setDuration((song.duration / 1000) | 0);
  }, [index, playList, dispatch]);

  const onEnded = () => {
    let i = -1
    const lastIndex = playList.length - 1
    switch (mode) {
      case playMode.sequence:
        i = (index === lastIndex) ? 0 : index + 1
        break
      case playMode.random:
        i = parseInt(String(Math.random() * (lastIndex + 1)))
        break
      case playMode.loop:
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
  const onError = () => {
    const i = (index === playList.length - 1) ? 0 : index + 1
    dispatch(changeIndex(i))
  }
  return (<>
    <Mini img={playList[index].img} duration={duration} pause={pause} currentTime={currentTime}/>
    <audio
      ref={audioRef}
      onTimeUpdate={(audio: any) => setCurrentTime(audio.target.currentTime)}
      onEnded={onEnded}
      onError={onError}
    />
  </>)
}

export default React.memo(Player)
