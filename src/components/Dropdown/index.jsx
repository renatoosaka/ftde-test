import React, { forwardRef } from "react";

import chevron from "assets/images/chevronDownBlack.png";

import * as S from "./styled";

const DropdownPage = forwardRef(({ label, name, options }, ref) => (
  <S.DropdownWrapper>
    {label && <S.Label>{label}</S.Label>}

    <S.DropdownContent>
      <S.Select name={name} ref={ref}>
        <S.DropdownOption value="">Selecione o(s) tipo(s)</S.DropdownOption>
        {options &&
          options.map((option, index) => (
            <S.DropdownOption key={index} value={option.value}>
              {option.text}
            </S.DropdownOption>
          ))}
      </S.Select>
      <S.DropdownIcon src={chevron} alt="Chevron" />
    </S.DropdownContent>
  </S.DropdownWrapper>
));

export default DropdownPage;
