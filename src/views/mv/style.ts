import styled from "styled-components";
import {style} from '../../assets/style/base'

export const NavBox = styled.div`
  position: fixed;
  top: 44px;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  padding: 0 12px;
  span{
    display: inline-block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: 14px;
    vertical-align: middle;
    &.active{
      color: ${style['theme-color']};
      border-bottom: 1px solid ${style['theme-color']};
      opacity: 0.8;
    }
  }
`
export const ScrollContainer = styled.div`
  position: fixed;
  top: 74px;
  bottom: 48px;
  width: 100%;
  overflow: hidden;
  padding: 12px 0 ;
  .mv-list{
    padding: 0 12px;
    li{
      margin-bottom: 12px;
      position: relative;
      >.title{
        font-size: 14px;
        color: black;
        padding: 8px 0;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      }
    }
  }
`
export const Img = styled.div`
  height: 144px;
  position: relative;
  font-size: 14px;
  color:#fff;
  img{
    max-height: 144px;
    width: 100%;
    border-radius: 6px;
  }
  .title{
    position: absolute;
    top: 8px;
    right: 8px;
    border-radius: 6px;
    border: 1px solid #fff;
    padding: 2px 10px;
  }
  .play{
    position: absolute;
    font-size: 30px;
    top: 46%;
    left: 50%;
    transform: translate(-50%);
  }
  .count{
    position: absolute;
    left: 8px;
    bottom: 8px;
    i{
      margin-right: 4px;
      font-size: 22px;
    }
  }
  .duration{
    position: absolute;
    right: 8px;
    bottom: 8px;
    i{
      margin-right: 4px;
      font-size: 22px;
    }
  }
`

export const Control = styled.div`
  padding: 6px 0;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  width: 100%;
  .singer{
    display: flex;
    justify-content: space-between;
    img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin: 6px;
    }
  }
`
