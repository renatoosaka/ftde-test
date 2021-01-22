import styled from "styled-components";

import img from "assets/images/pageBackground.png";
import pokemonTypes from 'utils/pokemonTypes'

export const MapWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-color: #5dae12;
  background-size: cover;
  height: 100vh;
`;

export const ModalContent = styled.div`
  position: relative;
  margin-top: 154px;
  width: 100%;
  background-color: #fff;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  #pokemon-img {
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
      width: 220px;
      height: 220px;
    }
  }

  header {
    padding-top: 162px;
  }

  h1 {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #2E3A59;

    text-transform: uppercase;

    button {
      border: none;
      background-color: transparent;
      margin-left: 16px;
      cursor: pointer;

      transition: all .2s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  #pokemon-detail{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    padding: 32px 0;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      & + div {
        border-left: 1px solid #C5CEE0;
      }

      span:first-child {
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        text-transform: uppercase;
        color: #2E3A59;
      }

      span:last-child {
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: #2E3A59;
      }
    }
  }

  #pokemon-type {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    padding: 24px 0;
  }

  #pokemon-skills {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    padding: 24px 0 100px;

    span {
      padding: 8px 24px;
      font-family: 'Open Sans';
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;

      text-align: center;
      text-transform: uppercase;

      color: #2E3A59;
    }
  }

  footer {
    position: fixed;
    bottom: 32px;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 11;

    button#pokeball {
      background-color: transparent;
      border: none;

      cursor: pointer;

      filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31)), drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));
    }
  }
`

export const PokemonType = styled.span`
  padding: 8px 24px;
  font-family: 'Open Sans';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;

  text-align: center;
  text-transform: uppercase;

  color: #FFFFFF;

  color: ${props => pokemonTypes[props.type].textColor};
  background-color: ${props => pokemonTypes[props.type].backgroundColor};
  border-radius: 42px;

  & + span {
    margin-left: 12px;
  }
`
