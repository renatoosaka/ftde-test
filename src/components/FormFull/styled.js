import styled from 'styled-components';
import cameraImg from 'assets/images/camera.png';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  padding: 12px;
  padding-top: 162px;
`;

export const AvatarInput = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 247px;
  height: 247px;

  border: 4px solid #00D68F;
  border-radius: 50%;

  background-color: #fff;
  background-image: url(${cameraImg});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 220px;
    height: 220px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    right: 16px;
    bottom: 16px;

    cursor: pointer;

    input {
      display: none;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 32px;
      height: 32px;

      background-color: #FF3D71;
      border: 2px solid #fff;
      border-radius: 50%;

      transition: all .2s ease-in-out;

      &:hover {
        background-color: #db2c66;
      }

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`
