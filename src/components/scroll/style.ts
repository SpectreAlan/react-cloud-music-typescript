import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  .up{
    position: absolute;
    left:0; right:0;
    bottom: 5px;
    width: 60px;
    height: 60px;
    margin: auto;
    z-index: 100;
  }
  .down{
    position: absolute;
    left:0; right:0;
    top: 0;
    height: 30px;
    margin: auto;
    z-index: 100;
  }
  .notice{
    position: absolute;
    width: 100%;
    left:0;
    top: 0;
    text-align: center;
    z-index: 100;
    color: red;
    height: 40px;
  }
`
