import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */

  position: relative;
  padding: 8px;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    background-color: #C5CEE0;
    left: 24px;
    right: 24px;
    top: 50%;
    z-index: 0;
  }
`
export const Title = styled.h5`
  display: inline;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #2E3A59;
  text-transform: uppercase;
  background-color: #fff;
  padding: 0 12px;
  z-index: 1;
`
