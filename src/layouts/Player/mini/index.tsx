import React from 'react'
import {useDispatch} from "react-redux";
import {Container} from './style'
import {changeFullScreen} from "../../../store/modules/player/actions";

const url = require('../../../assets/images/music.png')

interface InterfaceProps {
  img: string;
  duration: number;
  currentTime: number;
  pause: boolean
}

const Mini = (props: InterfaceProps) => {
  const dispatch = useDispatch()
  const {currentTime, duration, img, pause} = props
  const strokeDasharray = Math.PI * 100;
  const strokeDashoffset = (1 - currentTime / duration) * strokeDasharray || 0;
  return (
    <Container onClick={() => dispatch(changeFullScreen(true))}>
      <svg width={36} height={36} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle className="progress-background" r="50" cx="50" cy="50" fill="transparent"/>
        <circle
          className="progress-bar"
          r="50"
          cx="50"
          cy="50"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <img src={img || url} alt="music" className={pause ? '' : 'playing'}/>
    </Container>
  )
}

export default React.memo(Mini)
