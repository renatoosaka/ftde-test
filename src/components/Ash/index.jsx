import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchRandomPokemonRequest } from 'store/modules/pokemon/actions';

import * as S from './styled';

import ashFront from '../../assets/images/ashFront.png';
import searchTooltip from '../../assets/images/searchTooltip.png';
import searchingTooltip from '../../assets/images/searchingTooltip.png';
import errorTooltip from '../../assets/images/tooltipError.png';


const Ash = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.pokemon);

  const handleFetchRandomPokemon = useCallback(() => {
    if (state.slots.length < state.maxItemsInSlot) {
      dispatch(fetchRandomPokemonRequest())
    }
  }, [dispatch, state.maxItemsInSlot, state.slots.length])

  const tooltipImg = useMemo(() => {
    if (state.isLoading) {
      return searchingTooltip
    } else {
      if (state.slots.length >= state.maxItemsInSlot) {
        return errorTooltip
      } else {
        return searchTooltip;
      }
    }
  }, [state.isLoading, state.maxItemsInSlot, state.slots.length]);

  return (
    <S.Container onClick={handleFetchRandomPokemon}>
      <div id="tooltip" className={state.isLoading ? 'alwaysShow' : ''}>
        <img src={tooltipImg} alt="status" />
      </div>
      <img src={ashFront} alt="Ash" />
    </S.Container>
  )
}

export default Ash;
