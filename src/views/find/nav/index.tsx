import React from 'react';
import {useHistory} from 'react-router';
import Scroll from '../../../components/scroll';
import {Container} from './style'
import {routes} from './routes'

const Nav = () => {
  const router = useHistory()
  return (
    <Scroll direction={'horizontal'}>
      <Container count={routes.length}>
        {
          routes.map((item, index: number) => (
            <li
              key={index}
              onClick={() => router.push(item.path)}
            >
              <div className='iconBox'>
                <i className='iconfont' dangerouslySetInnerHTML={{__html: item.icon}}/>
              </div>
              <span>{item.name}</span>
            </li>
          ))
        }
      </Container>
    </Scroll>
  )
}
export default React.memo(Nav)
