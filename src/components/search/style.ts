import styled from 'styled-components';
import { style } from '../../assets/style/base'

export const Container = styled.div`
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
  .circle{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: slategray;
  }
`;
