import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  #tooltip {
    position: absolute;
    display: block;

    opacity: 0;
    top: -64px;
    left: 0;

    transition: all 0.25s ease-in-out;

    &.alwaysShow {
      opacity: 1;
    }

    img {
      width: 64px;
      height: 64px;
    }
  }

  &:hover {
    #tooltip {
      opacity: 1;
    }
  }
`;
