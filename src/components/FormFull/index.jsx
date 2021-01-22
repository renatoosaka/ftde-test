import React from 'react';

import Button  from 'components/Button';
import InputText from 'components/InputText';
import InputNumber from 'components/InputNumber';
import Title from 'components/Title';
import DropdownPage from 'components/Dropdown';

import * as S from './styled';

import plusImg from 'assets/images/plus.png';
import shieldImg from 'assets/images/shield.png';
import speedImg from 'assets/images/speed.png';
import swordImg from 'assets/images/sword.png';

const FormFull = () => {
  return (
    <S.Form>
      <S.AvatarInput>
        <label htmlFor="avatar">
          <div>
            <img src={plusImg} alt="select" />
          </div>
          <input type="file" id="avatar"  />
        </label>
      </S.AvatarInput>

      <InputText label='Nome' name='name' />
      <InputNumber label='HP' name='hp' />
      <InputNumber label='Peso' name='weight' suffix='Kg' />
      <InputNumber label='Altura' name='height' suffix='Cm' />

      <Title text='Tipo' />
      <DropdownPage />

      <Title text='Habilidades' />
      <InputText label='Habilidade 1' name='skill1' />
      <InputText label='Habilidade 2' name='skill2' />
      <InputText label='Habilidade 3' name='skill3' />
      <InputText label='Habilidade 4' name='skill4' />


      <Title text='Estatísticas' />
      <InputNumber label={(<><img src={shieldImg} alt='defense' /> Defesa</>)} name='defense' />
      <InputNumber label={(<><img src={swordImg} alt='attack' /> Ataque</>)} name='attack' />
      <InputNumber label={(<><img src={shieldImg} alt='defense' /> Defesa especial</>)} name='special-defense' />
      <InputNumber label={(<><img src={swordImg} alt='attack' /> Ataque especial</>)} name='special-attack' />
      <InputNumber label={(<><img src={speedImg} alt='speed' /> Velocidade</>)} name='speed' />

      <Button text='Criar Pokemon' />
    </S.Form>
  );
}

export default FormFull;
