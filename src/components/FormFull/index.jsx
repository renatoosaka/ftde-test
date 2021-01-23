import React, { useCallback, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
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
import pokemonStats from 'utils/pokemonStats';

import { addPokemonToSlot } from 'store/modules/pokemon/actions';

import plusImg from 'assets/images/plus.png';

const schema = yup.object().shape({
  avatar: yup.string().required(),
  name: yup.string().required(),
  attack: yup.string().required(),
  defense: yup.string().required(),
  height: yup.string().required(),
  hp: yup.string().required(),
  skill1: yup.string().required(),
  skill2: yup.string().required(),
  skill3: yup.string().required(),
  skill4: yup.string().required(),
  "special-attack":yup.string().required(),
  "special-defense":yup.string().required(),
  speed: yup.string().required(),
  type: yup.string().required(),
  weight: yup.string().required(),
});

const FormFull = () => {
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(null);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = useCallback(data => {
    const pokemonRandomID = Math.floor(Math.random() * 807) + 1000;

    const types = [];
    types.push(data.type);

    const skills = [];
    skills.push(data.skill1);
    skills.push(data.skill2);
    skills.push(data.skill3);
    skills.push(data.skill4);

    const stats = [];

    Object.keys(pokemonStats).forEach(item => {
      stats.push({
        id: item,
        value: data[item]
      })
    })

    const pokemon = {
      origin: 'user',
      id: pokemonRandomID,
      avatar: avatar && avatar.preview,
      name: data.name,
      hp: data.hp,
      height:  data.height,
      weight: data.weight,
      types,
      skills,
      stats,
    }

    dispatch(addPokemonToSlot(pokemon))
  }, [avatar, dispatch]);

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

  const pokemonStatsAvailable = useMemo(() =>
    Object.keys(pokemonStats).map(item => ({
      id: item,
      label: (
        <>
          <img src={pokemonStats[item].image} alt={pokemonStats[item].name} /> {pokemonStats[item].name}
        </>
      )
    })), [])

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      {JSON.stringify(errors)}
      <S.AvatarInput>
        {avatar && (
          <img src={avatar.preview} alt="avatar" />
        )}

        <label htmlFor="avatar" onChange={handleSelectAvatar}>
          <div>
            <img src={plusImg} alt="select" />
          </div>
          <input type="file" id="avatar" name="avatar" ref={register} />
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
      {pokemonStatsAvailable.map(item => (
        <InputNumber label={item.label} name={item.id} ref={register} />
      ))}

      <Button text='Criar Pokemon' />
    </S.Form>
  );
}

export default FormFull;
