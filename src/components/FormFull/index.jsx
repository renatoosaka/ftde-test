import React, { useCallback, useState, useMemo } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Button  from 'components/Button';
import InputText from 'components/InputText';
import InputNumber from 'components/InputNumber';
import Title from 'components/Title';
import DropdownPage from 'components/Dropdown';

import * as S from './styled';

import pokemonTypes from 'utils/pokemonTypes';

import plusImg from 'assets/images/plus.png';
import shieldImg from 'assets/images/shield.png';
import speedImg from 'assets/images/speed.png';
import swordImg from 'assets/images/sword.png';

const schema = yup.object().shape({
  name: yup.string().required(),
  attack: yup.string().required(),
  defense: yup.string().required(),
  height: yup.string().required(),
  hp: yup.string().required(),
  skill1: yup.string().required(),
  skill2: yup.string().required(),
  skill3: yup.string().required(),
  skill4: yup.string().required(),
  specia_attack:yup.string().required(),
  special_defense:yup.string().required(),
  speed: yup.string().required(),
  type: yup.string().required(),
  weight: yup.string().required(),
});

const FormFull = () => {
  const [avatar, setAvatar] = useState(null);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = useCallback(data => {
    // dispatch(updatePokemonData({...state.pokemon, name: data.name }))
    console.log(data);
  }, []);

  const handleSelectAvatar = useCallback((e) => {
    if(!e.target.files){
      return;
    }

    setAvatar({
      file: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0])
    })
  }, []);

  const pokemonTypesOptions = useMemo(() => Object.keys(pokemonTypes).map(item => ({
      value: item,
      text: pokemonTypes[item].name.toUpperCase()
    })), []);

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.AvatarInput>
        {avatar && (
          <img src={avatar.preview} alt="avatar" />
        )}

        <label htmlFor="avatar" onChange={handleSelectAvatar}>
          <div>
            <img src={plusImg} alt="select" />
          </div>
          <input type="file" id="avatar"  />
        </label>
      </S.AvatarInput>

      <InputText label='Nome' name='name' ref={register} />
      <InputNumber label='HP' name='hp' ref={register} />
      <InputNumber label='Peso' name='weight' suffix='Kg' ref={register} />
      <InputNumber label='Altura' name='height' suffix='Cm' ref={register} />

      <Title text='Tipo' />
      <DropdownPage options={pokemonTypesOptions} name='type' ref={register} />

      <Title text='Habilidades' />
      <InputText label='Habilidade 1' name='skill1' ref={register} />
      <InputText label='Habilidade 2' name='skill2' ref={register} />
      <InputText label='Habilidade 3' name='skill3' ref={register} />
      <InputText label='Habilidade 4' name='skill4' ref={register} />


      <Title text='Estatísticas' />
      <InputNumber label={(<><img src={shieldImg} alt='defense' /> Defesa</>)} name='defense' ref={register} />
      <InputNumber label={(<><img src={swordImg} alt='attack' /> Ataque</>)} name='attack' ref={register} />
      <InputNumber label={(<><img src={shieldImg} alt='defense' /> Defesa especial</>)} name='special_defense' ref={register} />
      <InputNumber label={(<><img src={swordImg} alt='attack' /> Ataque especial</>)} name='special_attack' ref={register} />
      <InputNumber label={(<><img src={speedImg} alt='speed' /> Velocidade</>)} name='speed' ref={register} />

      <Button text='Criar Pokemon' />
    </S.Form>
  );
}

export default FormFull;
