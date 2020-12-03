import styled from 'styled-components';
import { style } from '../../assets/style/base'
interface InterfaceProps {
  show: boolean
}
export const Container = styled.div`
  position: fixed;
  z-index: ${(props:InterfaceProps)=>props.show ? 6666666: 666};
  bottom: 0;
  top: 0;
  height: ${(props:InterfaceProps)=>props.show ? '100%': '44px'};
  left: 0;
  background: #fff;
  width: 100%;
  .top{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 6px;
    &>i {
      color: slategray;
      font-size: 20px;
    }
    input{
      width: 280px;
      outline: none;
      border: none;
      border-radius: 2rem;
      padding-left: 14px;
      height:30px;
      color: ${style['font-color']};
      background: #ececec;
    }
    span{
      visibility: ${(props:InterfaceProps)=>props.show ? 'visible': 'hidden'};
    }
  }
  .content{
    padding: 12px 12px 40px;
    .result{
      li{
        margin-bottom: 12px;
        i{
          color: lightslategrey;
          margin-right: 6px;
        }
      }
    }
    .suggest-title{
      margin: 12px 0 ;
      font-size: 15px;
      padding-bottom: 6px;
      border-bottom: 1px solid rgba(100,100,100,0.2);
    }
    .suggest{
      display: flex;
      flex-wrap: wrap;
      li{
        font-size: 14px;
        width: 45%;
        margin: 0 12px 12px 0;
        span{
          margin-right: 6px;
        }
        .red{
          color: ${style['theme-color']};
        }
      }
    }
  }
`;
