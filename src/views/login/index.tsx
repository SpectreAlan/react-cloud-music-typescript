import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {login, clearInfo} from "../../store/modules/user/actions";
import {Container} from "./style";

const Login = () => {
  const router = useHistory()
  const dispatch = useDispatch()
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const loginRequest = () => {
    dispatch(login({phone, password}, router))
  }
  useEffect(() => {
    dispatch(clearInfo())
  }, [])
  return <Container>
    <div className="top">
      <i className='iconfont back' onClick={() => router.go(-1)}>&#xe63a;</i>
      <span>手机号登陆</span>
    </div>
    <ul className="form">
      <li>
        <i className='iconfont phone'>&#xe609;</i>
        <input type="text" placeholder='请输入手机号' onChange={(e) => setPhone(e.target.value)}/>
      </li>
      <li>
        <i className='iconfont pwd'>&#xe60c;</i>
        <input type="password" placeholder='请输入密码' onChange={(e) => setPassword(e.target.value)}/>
      </li>
      <li>
        <button onClick={() => loginRequest()}>登陆</button>
      </li>
    </ul>
  </Container>
}

export default Login
