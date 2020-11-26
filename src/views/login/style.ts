import styled from 'styled-components';
import {style} from '../../assets/style/base'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right:0;
  background: #fff;
  z-index: 88;
  .top{
    font-size: 16px;
    background-color: ${style['theme-color']};
    color: #fff;
    position: absolute;
    width:100%;
    top: 0;
    height: 40px;
    line-height: 40px;
    text-align: center;
    i{
      font-size: 20px;
      line-height: 40px;
      position: absolute;
      left: 12px;
      top: 0;
    }
  }
  .form{
    color: #fff;
    width: 280px;
    padding: 20px 20px 0;
    box-sizing: border-box;
    border: 1px solid gray;
    border-radius: 8px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    li{
      margin-bottom: 20px;
      text-align: center;
      position: relative;
      width: 100%;
      input{
        border: 1px solid gray;
        outline: none;
        height: 30px;
        border-radius: 4px;
        padding-left: 30px;
        color: #000;
        font-size: 14px;
      }
      button{
        border: 1px solid #fff;
        outline: none;
        border-radius: 4px;
        padding: 0 90px;
        height: 36px;
        background: ${style['theme-color']};
        color: #fff;
      }
      i{
        position: absolute;
        color: gray;
        top: 8px;
        left: 24px;
      }
    }
  }
`
