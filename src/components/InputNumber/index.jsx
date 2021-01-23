import React, { useState, useCallback, forwardRef } from "react";

import chevron from "assets/images/chevronDownBlack.png";

import * as S from "./styled";

const InputNumber = forwardRef(({ className, label, placeholder, name, suffix, defaultValue, error }, ref) => {
  const [numberValue, setNumberValue] = useState(defaultValue);

  const handleIncValue = useCallback(() => {
    setNumberValue(Number(numberValue || '0') + 1);
  }, [numberValue]);

  const handleDecValue = useCallback(() => {
    const newValue = Number(numberValue || '0') - 1;

    if (newValue <= 0)  {
      setNumberValue('');
    } else {
      setNumberValue(Number(numberValue || '0') - 1);
    }
  }, [numberValue])

  return (
    <S.InputNumberWrapper className={className}>
      {label && <S.Label>{label}</S.Label>}

      <S.InputContent>
        <S.Input type="number" placeholder={placeholder} name={name} defaultValue={numberValue} ref={ref} error={error} />

        {suffix && <S.InputSuffix>{suffix}</S.InputSuffix>}

        <S.InputActions>
          <S.Arrow src={chevron} className="increase" alt="Mais" onClick={handleIncValue} />
          <S.Arrow src={chevron} className="decrease" alt="Menos" onClick={handleDecValue} />
        </S.InputActions>
      </S.InputContent>
    </S.InputNumberWrapper>
  )
});

export default InputNumber;
