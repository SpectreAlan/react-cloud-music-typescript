import React from 'react'
import Scroll from '../../components/scroll'
import {NavContainer} from './style'

interface InterfaceProps {
  handleNavClick: Function;
  nav: string[];
  category: string
}

const Nav = (props: InterfaceProps) => {
  const {handleNavClick, nav, category} = props
  const len = nav.join('').length * 14 + nav.length * 13.4
  return (
    <Scroll direction={'horizontal'}>
      <NavContainer count={len}>
        {
          nav.map((item, index: number) => (
            <li
              className={category === item ? 'active' : ''}
              key={index}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </li>
          ))
        }
      </NavContainer>
    </Scroll>
  )
}
export default React.memo(Nav)
