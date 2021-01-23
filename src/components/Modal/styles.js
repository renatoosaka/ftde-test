import styled from 'styled-components'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
`

export const Container = styled.div`
  z-index: 100;
  background: linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);
  position: absolute;

  width: 100%;
  height: 100vh;
  max-width: 360px;
  max-height: 560px;

  border-radius: 8px;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  > button {
    background-color: #fff;
    width: 38px;
    height: 38px;

    border: 2px solid #8F9BB3;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 12px;
    right: 12px;

    cursor: pointer;
    transition: opacity .25s ease-in-out;

    z-index: 101;

    &:hover {
      opacity: .85;
    }

    img {
      width: 19px;
      height: 19px;
    }
  }
`
export const Content = styled.div`
  position: fixed;
  overflow: auto;
  background-color: transparent;
  width: 100%;
  height: 100%;
  overflow: auto;

  /* Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
    display: none;
  }

  scrollbar-width: none;  /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
`
