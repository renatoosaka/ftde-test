import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import Button from "components/Button";

import iconPlus from "assets/images/plus.png";

import * as S from "./styled";

const Sidebar = () => {
  const state = useSelector(state => state.pokemon)

  const numberOfEmptySlot = useMemo(() => {
    return state.maxItemsInSlot - state.slots.length
  }, [state.maxItemsInSlot, state.slots.length]);

  return (
  <S.SideBarWrapper>
    <S.SideBarList>
      {Array.from({ length: numberOfEmptySlot }, (_, index) => (
        <S.SideBarItem key={index}>?</S.SideBarItem>
      ))}
    </S.SideBarList>

    <Button icon={iconPlus} />
  </S.SideBarWrapper>
  );
}

export default Sidebar;
