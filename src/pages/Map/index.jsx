import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cancelRandomPokemon } from "store/modules/pokemon/actions";

import Modal from "components/Modal";
import Sidebar from "components/Sidebar";
import Title from "components/Title";
import Ash from "components/Ash";

import * as S from "./styled";

import pokeballImg from 'assets/images/pokeball.png'


const MapPage = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.pokemon);

  const isShowRandomPokemonModal = useMemo(() => {
    return state.pokemon && !state.isLoading
  }, [state.isLoading, state.pokemon])

  const handleCloseRandomPokemonModal = useCallback(() => {
    dispatch(cancelRandomPokemon())
  }, [dispatch])

  return (
    <S.MapWrapper className="map">
      <Sidebar />

      <Ash />
      {state.pokemon && (
        <Modal isShowing={isShowRandomPokemonModal} toggle={handleCloseRandomPokemonModal} >
          <S.ModalContent>
            <div id="pokemon-img">
              <img src={state.pokemon.avatar} alt={state.pokemon.name} />
            </div>

            <h1>{state.pokemon.name}</h1>

            <div id="pokemon-detail">
              <div>
                <span>HP</span>
                <span>{state.pokemon.hp}/{state.pokemon.hp}</span>
              </div>
              <div>
                <span>Altura</span>
                <span>{state.pokemon.height/10}m</span>
              </div>
              <div>
                <span>Peso</span>
                <span>{state.pokemon.weight/10}kg</span>
              </div>
            </div>

            <Title text='Tipo' />
            <div id="pokemon-type">
              {state.pokemon.types.map(item => (<span>{item}</span>))}
            </div>

            <Title text='Habilidades' />
            <div id="pokemon-skills">
              <span>{state.pokemon.skills.map(item => item).join(', ')}</span>
            </div>

            <button type="button">
              <img src={pokeballImg} alt="Pokeball" />
            </button>
          </S.ModalContent>
        </Modal>

      )}
    </S.MapWrapper>
  );
}

export default MapPage;
