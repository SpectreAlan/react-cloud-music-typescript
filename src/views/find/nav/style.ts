import styled from 'styled-components';
import {style} from '../../../assets/style/base';

interface InterfaceProps {
  count: number;
}

export const Container = styled.ul`
  padding: 12px 0;
  display: flex;
  flex-wrap: nowrap;
  width: ${(props: InterfaceProps) => props.count * 60 + 'px'};
  li{
    width: 60px;
    height: 54px;
    text-align: center;
    font-size: 12px;
    .iconBox{
      width:34px;
      margin: 0 auto 6px;
      height: 34px;
      line-height: 34px;
      border-radius: 50%;
      background: ${style['theme-color']};
      .iconfont{
        font-size: 20px;
        color: #fff;
      }
    }
  }
`
