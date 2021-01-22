import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { cancelEditPokemonData, updatePokemonData } from 'store/modules/pokemon/actions';

import Input from 'components/InputText'

import * as S from './styled'

import closeImg from 'assets/images/close.png';
import checkmarkImg from 'assets/images/checkmark.png'

const schema = yup.object().shape({
  name: yup.string().required()
});

const FormName = () => {
  const state = useSelector(state => state.pokemon);
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = useCallback(data => {
    dispatch(updatePokemonData({...state.pokemon, name: data.name }))
  }, [dispatch, state.pokemon])

  const handleCancel = useCallback(() => {
    dispatch(cancelEditPokemonData())
  }, [dispatch])

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Input name='name' ref={register} defaultValue={state.pokemon.name} />
        <button type="submit">
          <img src={checkmarkImg} alt="save" />
        </button>
        <button type="button" onClick={handleCancel}>
          <img src={closeImg} alt="cancel" />
        </button>
      </S.Form>
      <p>{errors.name?.message}</p>
    </>
  );
}

export default FormName;
