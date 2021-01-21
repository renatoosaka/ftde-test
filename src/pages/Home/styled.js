import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  position: relative;
  background: linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 124px;
    height: 56px;

    background: #FF3D71;
    border-radius: 42px;

    text-decoration: none;

    font-size: 18px;
    font-weight: 700;
    font-family: 'Open Sans';
    color: #fff;

    margin-top: 32px;

    filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31)), drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));
    transition: opacity 0.25ms ease-in-out;

    &:hover {
      opacity: .9;
    }
  }
`;
