import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchRandomPokemonRequest } from 'store/modules/pokemon/actions';

import * as S from './styled';

import ashFront from '../../assets/images/ashFront.png';
import ashLeft from '../../assets/images/ashLeftLeg.png';
import ashRight from '../../assets/images/ashRightLeg.png';
import ashStop from '../../assets/images/ashStop.png';

import searchTooltip from '../../assets/images/searchTooltip.png';
import searchingTooltip from '../../assets/images/searchingTooltip.png';
import errorTooltip from '../../assets/images/tooltipError.png';


const Ash = () => {
  const imgRef = useRef(null);
  const dispatch = useDispatch();
  const state = useSelector(state => state.pokemon);

  useEffect(() => {
    let position = 0;
    const ashSprite = [ashFront, ashLeft, ashRight, ashLeft, ashRight, ashLeft, ashRight, ashLeft, ashRight, ashLeft, ashRight, ashStop];

    const interval = setInterval(() => {
      if (imgRef.current) {
        imgRef.current.src = ashSprite[position];
        position++;

        if (position >= ashSprite.length) {
          position = 0;
        }

      }
    }, 500);

    return () => {
      clearInterval(interval);
    }
  }, []);

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
      <img src={ashFront} alt="Ash" ref={imgRef} />
    </S.Container>
  )
}

export default Ash;
