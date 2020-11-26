import React from 'react'
import {Container} from './style'

interface InterfaceProps {
  img: string;
  duration: number;
  currentTime: number;
  pause: boolean
}

const Mini = (props: InterfaceProps) => {
  const {currentTime, duration, img, pause} = props
  const dashArray = Math.PI * 100;
  const dashOffset = (1 - currentTime / duration) * dashArray;
  return (
    <Container>
      <svg width={36} height={36} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle className="progress-background" r="50" cx="50" cy="50" fill="transparent"/>
        <circle
          className="progress-bar"
          r="50"
          cx="50"
          cy="50"
          fill="transparent"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
        />
      </svg>
      <img src={img} alt="music" className={pause ? '' : 'playing'}/>
    </Container>
  )
}

export default React.memo(Mini)
