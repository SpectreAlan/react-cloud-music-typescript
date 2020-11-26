import React from "react";
import {Container} from "./style";
import {ITrack} from "../../../interface";


interface InterfaceProps {
  img: string;
  duration: number;
  currentTime: number;
  pause: boolean;
  song: ITrack
}

const NormalPlayer = (props: InterfaceProps) => {
  const {img, duration, currentTime, pause, song} = props
  const hide = () => {
  }
  return (
    <Container>
      <div className="top">
        <i className='iconfont' onClick={hide}>&#xe63a;</i>
        <div className="center">
          <span>{song.name}</span>
          <p>{song.singer}</p>
        </div>
        <i className='iconfont' onClick={hide}>&#xe65c;</i>
      </div>
      <div className="rotate">
        <div className="inner">
          <img src={img} alt="music"/></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <i className='iconfont' onClick={hide}>&#xe688;</i>
          <i className='iconfont' onClick={hide}>&#xe626;</i>
          <i className='iconfont' onClick={hide}>&#xe865;</i>
          <i className='iconfont' onClick={hide}>&#xe71f;</i>
        </div>
        <div className="progress">
          <span>{currentTime}</span>
          <div className="line">
            <span className='circle'/>
          </div>
          <span>{duration}</span>
        </div>
        <div className="control">
          <i className='iconfont' onClick={hide}>&#xe66d;</i>
          <i className='iconfont' onClick={hide}>&#xe800;</i>
          <i className='iconfont' onClick={hide}>{pause ? '&#xe61a;' : '&#xe774;'}</i>
          <i className='iconfont' onClick={hide}>&#xe7ff;</i>
          <i className='iconfont' onClick={hide}>&#xe6a7;</i>
        </div>
      </div>
    </Container>
  )
}

export default React.memo(NormalPlayer)
