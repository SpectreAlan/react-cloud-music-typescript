import styled from "styled-components";
import {animation} from '../mini/style'
import {style} from "../../../assets/style/base";

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
      justify-content: space-between;
      padding: 0 8px;
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
export const ListContainer = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
background: transparent;
.content{
  box-sizing: border-box;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 12px;
  background: #fff;
  position: absolute;
  z-index: 667;
  bottom: 0;
  left: 0;
  right: 0;
  height: 350px;
  width: 100%;
  h3{
    margin-bottom: 12px;
    font-size: 15px;
    span{
      color: lightslategrey;
      font-size: 12px;
    }
  }
  .control{
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    i{
      font-size: 20px;
    }
  }
  .list{
    height: 245px;
    overflow: hidden;
    width: 100%;
    li{
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      border-bottom: 1px solid rgba(200,200,200,0.2);
      padding-bottom: 8px;
      div{
        color: #000;
        font-size: 15px;
        span{
          color: lightslategrey;
          font-size: 12px;
        }
      }
      i{
        color: lightslategrey;
      }
    }
    .cur{
      color: ${style['theme-color']}
      >div{
        color: ${style['theme-color']}
        span{
          color: ${style['theme-color']}
        }
      }
      i{
        color: ${style['theme-color']}
      }
    }
  }
  .close{
    font-size: 14px;
    text-align: center;
  }
}
.mask{
    background: rgba(0,0,0,0.2);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 666;
  }
`
