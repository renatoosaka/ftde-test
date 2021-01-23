import React, { forwardRef } from "react";

import * as S from "./styled";

const InputText = forwardRef(({ className, label, type, placeholder, name, defaultValue, error }, ref) => (
  <S.InputTextWrapper className={className}>
    {label && <S.Label>{label}</S.Label>}

    <S.Input type={type} placeholder={placeholder} name={name} ref={ref} defaultValue={defaultValue} error={error} />
  </S.InputTextWrapper>
));

export default InputText;
