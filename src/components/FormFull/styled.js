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

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    /* width: 220px;
    height: 220px;
    object-fit: n; */
  }

  label {
    position: absolute;
    width: 82px;
    height: 82px;

    cursor: pointer;

    background-image: url(${cameraImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    input {
      display: none;
    }

    div {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;

      bottom: -8px;
      right: -8px;

      width: 32px;
      height: 32px;

      background-color: #FF3D71;
      border: 2px solid #fff;
      border-radius: 50%;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`
