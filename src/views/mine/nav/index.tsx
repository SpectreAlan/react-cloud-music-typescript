import React from "react";
import {useHistory} from 'react-router';
import {routes} from './routes'
import {Container} from './style'

const Index = () => {
  const router = useHistory()
  return (
    <Container>
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
  )
}

export default React.memo(Index)
