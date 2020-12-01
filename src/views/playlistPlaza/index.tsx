import React, {useEffect, useState} from "react";
import {Container} from './style'
import {detailRequest, navRequest} from '../../api/playListPlaza'
import Nav from './nav'

const PlayListPlaza = () => {
  const [category, setCategory] = useState('全部歌单')
  const [nav, setNav] = useState<string[]>([])
  useEffect(() => {
    navRequest().then(res => {
      const types = res.data.sub
      const list: string[] = ['全部歌单']
      types.map((item: any) => {
        list.push(item.name)
      })
      setNav(list)
    })
  }, [])
  useEffect(() => {
    detailRequest(category).then((res: any) => {
      console.log(res.data.playlists)
    })
  }, [category])
  const handleNavClick = (item: string)=>{
    setCategory(item)
  }
  return (
    <Container>
      <Nav nav={nav} handleNavClick={handleNavClick} category={category}/>
    </Container>
  )
}

export default React.memo(PlayListPlaza)
