import styled from "styled-components";
import {style} from "../../assets/style/base";

export const Container = styled.div`
  position: fixed;
  top:0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 11;
  box-sizing: border-box;
  overflow: hidden;
  padding-top: 70px;
  background: #fff;
  .none{
    text-align: center;
    padding-top: 20px;
  }
  .fixed{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .top{
      color: gray;
      font-size: 16px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      display: flex;
      justify-content: space-between;
      i{
        font-size: 20px;
        line-height: 40px;
        margin-left: 12px;
      }
    }
  }
`

interface InterfaceProps {
  count: number;
}

export const NavContainer = styled.ul`
  padding-top: 12px;
  display: flex;
  flex-wrap: nowrap;
  width: ${(props: InterfaceProps) => props.count + 'px'};
  border-bottom: 1px solid rgba(100,100,100,0.1);
  li{
    padding-bottom: 4px;
    margin: 0 8px;
    text-align: center;
    font-size: 14px;
    color: #000;
    font-weight: bold;
  }
  .active{
    color: ${style["theme-color"]};
    border-bottom: 2px solid ${style["theme-color"]};
  }
`
