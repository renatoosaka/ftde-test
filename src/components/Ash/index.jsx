import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styles';

import ashFront from '../../assets/images/ashFront.png';
import searchTooltip from '../../assets/images/searchTooltip.png';
import searchingTooltip from '../../assets/images/searchingTooltip.png';
import errorTooltip from '../../assets/images/tooltipError.png';


const Ash = () => {
  const state = useSelector(state => state.pokemon);
  console.log(state);

  return (
    <S.Container>
      <img src={ashFront} alt="Ash" />
    </S.Container>
  )
}

export default Ash;
