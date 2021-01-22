import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as S from './styles';

import ashFront from '../../assets/images/ashFront.png';
import searchTooltip from '../../assets/images/searchTooltip.png';
import searchingTooltip from '../../assets/images/searchingTooltip.png';
import errorTooltip from '../../assets/images/tooltipError.png';
import { fetchRandomPokemonRequest } from 'store/modules/pokemon/actions';


const Ash = () => {
  const dispatch = useDispatch();

  const handleFetchRandomPokemon = useCallback(() => {
    dispatch(fetchRandomPokemonRequest())
  }, [dispatch])

  return (
    <S.Container onClick={handleFetchRandomPokemon}>
      <img src={ashFront} alt="Ash" />
    </S.Container>
  )
}

export default Ash;
