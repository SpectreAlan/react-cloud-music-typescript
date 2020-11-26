import React, {useRef, useCallback} from 'react';
import {Container} from './style'
import UserInfo from './userInfo'
import Nav from './nav'
import SongList from './songList'
import Scroll from "../../components/scroll";
import {ScrollContainer} from './style'

const Mine = () => {
  const mineScrollRef = useRef(null)
  const refresh = useCallback(() => {
    if (mineScrollRef && mineScrollRef.current) {
      // @ts-ignore
      mineScrollRef.current.refresh()
    }
  },[])
  return (
    <ScrollContainer>
      <Scroll ref={mineScrollRef}>
        <Container>
          <UserInfo/>
          <Nav/>
          <SongList refresh={refresh}/>
        </Container>
      </Scroll>
    </ScrollContainer>
  )
}

export default React.memo(Mine)
