import styled from "styled-components";
import {animation} from '../mini/style'

interface InterfaceProps {
  img: string;
  pause: boolean
}

export const Container = styled.div`
  position: fixed;
  color: #000;
  z-index: 66666;
  background: url(${(props: InterfaceProps) => props.img}) no-repeat center center;
  background-size: cover;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  .content{
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.8);
    .top{
      display: flex;
      justify-content: space-around;
      height: 48px;
      text-align: center;
      .center{
        text-align: center;
        span{
          line-height: 32px;
          font-size: 16px;
        }
        p{
          line-height: 16px;
          font-size: 12px;
        }
      }
      i{
        line-height: 48px;
        font-size: 22px;
      }
    }
    .rotate{
      margin: 30% auto;
      width: 100px;
      height: 100px;
      border: 20px solid #fff;
      border-radius: 50%;
      background: #000;
      padding: 40px;
      animation: ${(props: InterfaceProps) => props.pause ? '' : animation} 4s linear infinite;
      img{
        width: 100px; 
        height: 100px;
        border-radius: 50%;
      }
    }
    .bottom{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      .icons{
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
        i{
          font-size: 25px;
        }
      }
      .progress{
        width: 100%;
        box-sizing: border-box;
        padding: 24px 65px 0;
        line-height: 48px;
        height: 48px;
        position: relative;
        .line{
          width: 100%;
          height: 2px;
          background: #000;
          position: relative;
          .circle{
            position: absolute;
            top: -4px;
            left: 20px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #000;
          }
        }
        .currentTime{
          position: absolute;
          top: 0;
          left: 12px;
        }
        .duration{
          position: absolute;
          top: 0;
          right: 12px;
        }
      }
      .control{
        width: 100%;
        display: flex;
        justify-content: space-around;
        line-height: 58px;
        i{
          font-size: 30px;
        }
      }
    }
  }
`
