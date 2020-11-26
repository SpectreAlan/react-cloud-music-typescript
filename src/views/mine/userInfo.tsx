import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducer";
import {UserInfoBox} from './style'

const UserInfo = () => {
  const {info} = useSelector((state: RootState) => ({
    info: state.user.info
  }));
  return (
    <UserInfoBox>
      <img src={info.avatarUrl} alt={info.nickname}/>
      <div className="center">
        <div className='name'>
          {info.nickname}
        </div>
        <div className="level">{info.userId}</div>
      </div>
    </UserInfoBox>
  )
}

export default React.memo(UserInfo)
