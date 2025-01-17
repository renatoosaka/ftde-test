import React, { useCallback, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import { addPokemonToSlot, updatePokemonData } from 'store/modules/pokemon/actions';

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
  const state = useSelector(state => state.pokemon);
  const [avatar, setAvatar] = useState(null);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const getStatValue = useCallback((stat) => {
    return state.pokemon.stats.find(item => item.id === stat).value || "";
  }, [state.pokemon]);


  const defaultValue = useMemo(() => ({
    avatar: state.pokemon ? state.pokemon.avatar : null,
    name: state.pokemon ? state.pokemon.name : "",
    height: state.pokemon ? state.pokemon.height : "",
    hp: state.pokemon ? state.pokemon.hp : "",
    skill1: state.pokemon ? state.pokemon.skills[0] : "",
    skill2: state.pokemon ? state.pokemon.skills[1] : "",
    skill3: state.pokemon ? state.pokemon.skills[2] : "",
    skill4: state.pokemon ? state.pokemon.skills[3] : "",
    type: state.pokemon ? state.pokemon.types[0] : "",
    weight: state.pokemon ? state.pokemon.weight : "",
    attack: state.pokemon ? getStatValue("attack") : "",
    defense: state.pokemon ? getStatValue("defense") : "",
    "special-attack": state.pokemon ? getStatValue("special-attack") : "",
    "special-defense": state.pokemon ? getStatValue("special-defense") : "",
    speed: state.pokemon ? getStatValue("speed") : "",
  }), [getStatValue, state.pokemon]);

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
      avatar: avatar ? avatar.preview : defaultValue.avatar,
      name: data.name,
      hp: data.hp,
      height:  data.height,
      weight: data.weight,
      types,
      skills,
      stats,
    }

    if (!avatar && !defaultValue.avatar) {
      return;
    }

    if (state.isEditing) {
      dispatch(updatePokemonData({...state.pokemon, ...pokemon}))
    } else {
      dispatch(addPokemonToSlot({...pokemon, id: pokemonRandomID}))
    }

  }, [avatar, defaultValue, dispatch, state.isEditing, state.pokemon]);

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
    })), []);

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.AvatarInput>
        {avatar && (
          <img src={avatar.preview} alt="avatar" />
        )}

        {!avatar && defaultValue.avatar && (
          <img src={defaultValue.avatar} alt="avatar" />
        )}

        <label htmlFor="avatar" onChange={handleSelectAvatar}>
          <div>
            <img src={plusImg} alt="select" />
          </div>
          <input type="file" id="avatar" name="avatar" ref={register} />
        </label>
      </S.AvatarInput>

      <InputText label='Nome' name='name' ref={register} defaultValue={defaultValue.name} error={errors.name} />
      <InputNumber label='HP' name='hp' ref={register}  defaultValue={defaultValue.hp} error={errors.hp} />
      <InputNumber label='Peso' name='weight' suffix='Kg' ref={register} defaultValue={defaultValue.weight} error={errors.weight} />
      <InputNumber label='Altura' name='height' suffix='Cm' ref={register} defaultValue={defaultValue.height} error={errors.height} />

      <Title text='Tipo' />
      <DropdownPage options={pokemonTypesOptions} name='type' ref={register} defaultValue={defaultValue.type} error={errors.type} />

      <Title text='Habilidades' />
      <InputText label='Habilidade 1' name='skill1' ref={register} defaultValue={defaultValue.skill1} error={errors.skill1} />
      <InputText label='Habilidade 2' name='skill2' ref={register} defaultValue={defaultValue.skill2} error={errors.skill2} />
      <InputText label='Habilidade 3' name='skill3' ref={register} defaultValue={defaultValue.skill3} error={errors.skill3} />
      <InputText label='Habilidade 4' name='skill4' ref={register} defaultValue={defaultValue.skill4} error={errors.skill4} />


      <Title text='Estatísticas' />
      {pokemonStatsAvailable.map(item => (
        <InputNumber key={item.id} label={item.label} name={item.id} ref={register} defaultValue={defaultValue[item.id]} error={errors[item.id]} />
      ))}

      <Button text={state.isEditing ? "Salvar alterações" : "Criar pokemon"} />
    </S.Form>
  );
}

export default FormFull;
