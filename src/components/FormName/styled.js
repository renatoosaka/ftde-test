import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: row;

  width: 100%;

  filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31)), drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;

    border: none;
    background: #EDF1F7;
    border-radius: 4px;

    cursor: pointer;

    margin-left: 8px;

    transition: all .2s ease-in-out;

    &:hover {
      background-color: #D6D9DD;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
`
