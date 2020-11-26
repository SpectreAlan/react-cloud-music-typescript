import styled from 'styled-components'
import { style } from '../../assets/style/base'

export const Tab = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background: #ececec;
  width: 100%;
  box-sizing: border-box;
  padding: 4px;
  a{
    color: ${style['font-color']};
    text-align: center;
    font-size: 12px;
    i{
      font-size: 18px;
      display: block;
      line-height: 22px;
      background: transparent;
      text-align: center;
      border-radius: 50%;
    }
    span{
      line-height: 18px
    }
    &.selected{
       color: ${style['theme-color']};
       i{
        background: ${style['theme-color']};
        color: #fff;
       }
    }
  }
`
