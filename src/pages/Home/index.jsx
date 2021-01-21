import React from "react";
import { Link } from 'react-router-dom';

import * as S from "./styled";

import pokemonLogo from '../../assets/images/pokemonLogo.png'

const HomePage = () => (
  <S.HomeWrapper>
    <img src={pokemonLogo} alt="Pokemon" />
    <Link to='/map'>Start</Link>
  </S.HomeWrapper>
);

export default HomePage;
