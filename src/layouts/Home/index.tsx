import React from "react"
import {useSelector} from 'react-redux'
import {renderRoutes, RouteConfigComponentProps} from "react-router-config"
import {Tab} from './style'
import {NavLink} from "react-router-dom"
import {RootState} from "../../store/reducer"
import Player from "../Player"

// import Player from "../application/Player/index";

function Home(props: RouteConfigComponentProps) {
  const {route} = props;

  const {info} = useSelector((state: RootState) => ({
    info: state.user.info,
  }));
  return (
    <>
      <Tab>
        <NavLink to="/find" activeClassName="selected">
          <div>
            <i className='iconfont'>&#xe75a;</i>
            <span> 发现 </span>
          </div>
        </NavLink>
        <NavLink to="/video" activeClassName="selected">
          <div>
            <i className='iconfont'>&#xe637;</i>
            <span> 视频 </span>
          </div>
        </NavLink>
        <NavLink to={info.userId > 0 ? '/mine' : '/login'} activeClassName="selected">
          <div>
            <i className='iconfont'>&#xe60e;</i>
            <span> 我的 </span>
          </div>
        </NavLink>
      </Tab>
      {renderRoutes(route?.routes)}
      <Player/>
    </>
  )
}

export default React.memo(Home);
