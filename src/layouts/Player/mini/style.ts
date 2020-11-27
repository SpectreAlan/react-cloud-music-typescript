import styled, {keyframes} from "styled-components";
import {style} from "../../../assets/style/base";

export const animation = keyframes`
  0% {
    transform: rotate(0deg);
    transform-origin: center center;
  }
  100% {
    transform: rotate(360deg);
    transform-origin: center center;
  }
`;
export const Container = styled.div`
  position: fixed;
  z-index: 9999;
  right: 4px;
  top: 4px;
  circle{
    stroke-width: 8px;
    transform-origin: center;
    &.progress-background{
      transform: scale(0.9);
      stroke: ${style["theme-color-shadow"]};
    }
    &.progress-bar{
      transform: scale(0.9) rotate(-90deg);
      stroke: ${style["theme-color"]};
    }
  }
  img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
  }
  .playing{
    animation: ${animation} 4s linear infinite;
  }
`
