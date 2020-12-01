import styled from "styled-components";
import {style} from "../../assets/style/base";

export const Container = styled.div``
interface InterfaceProps {
  count: number;
}

export const NavContainer = styled.ul`
  padding-top: 12px;
  display: flex;
  flex-wrap: nowrap;
  width: ${(props: InterfaceProps) => props.count + 'px'};
  border-bottom: 1px solid silver;
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
