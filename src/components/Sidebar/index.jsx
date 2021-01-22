import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/Button";

import iconPlus from "assets/images/plus.png";

import * as S from "./styled";
import { showPokemonFromSlot } from "store/modules/pokemon/actions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.pokemon);

  const numberOfEmptySlot = useMemo(() => {
    return state.maxItemsInSlot - state.slots.length
  }, [state.maxItemsInSlot, state.slots.length]);

  const handleSelectPokemon = useCallback((index) => {
    dispatch(showPokemonFromSlot(index));
  }, [dispatch]);

  return (
  <S.SideBarWrapper>
    <S.SideBarList>
      {Array.from({ length: numberOfEmptySlot }, (_, index) => (
        <S.SideBarItem key={index}>?</S.SideBarItem>
      ))}
    </S.SideBarList>
    {state.slots.map((pokemon, index) => (
      <S.SideBarPokemonItem key={pokemon.name} onClick={() => handleSelectPokemon(index)}>
        <img src={pokemon.avatar}  alt={pokemon.name} />
      </S.SideBarPokemonItem>
    ))}
    <Button icon={iconPlus} />
  </S.SideBarWrapper>
  );
}

export default Sidebar;
