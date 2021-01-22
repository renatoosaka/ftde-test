import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPokemonToSlot, cancelRandomPokemon, releasePokemonFromSlot } from "store/modules/pokemon/actions";

import Modal from "components/Modal";
import Sidebar from "components/Sidebar";
import Title from "components/Title";
import Button from "components/Button";
import Ash from "components/Ash";

import pokemonTypes from 'utils/pokemonTypes';

import * as S from "./styled";

import pokeballImg from 'assets/images/pokeball.png'
import editImg from 'assets/images/editIcon.png'


const MapPage = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.pokemon);

  const isShowRandomPokemonModal = useMemo(() => {
    return state.pokemon && !state.isLoading
  }, [state.isLoading, state.pokemon])

  const handleCloseRandomPokemonModal = useCallback(() => {
    dispatch(cancelRandomPokemon())
  }, [dispatch])

  const handleAddPokemonToSlot = useCallback((pokemon) => {
    dispatch(addPokemonToSlot(pokemon))
  }, [dispatch])

  const handleReleasePokemon = useCallback((pokemonID) => {
    dispatch(releasePokemonFromSlot(pokemonID))
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

            <h1>
              {state.pokemon.name}
              {state.pokemon.origin === 'slot' && (
                <button type="button">
                  <img src={editImg} alt='edit' />
                </button>
              )}
            </h1>

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
              {state.pokemon.types.map(item => (<S.PokemonType type={item} key={item}>{pokemonTypes[item].name}</S.PokemonType>))}
            </div>

            <Title text='Habilidades' />
            <div id="pokemon-skills">
              <span>{state.pokemon.skills.map(item => item).join(', ')}</span>
            </div>

            <footer>
              {state.pokemon.origin === 'remote' && (
                <button type="button" id="pokeball" onClick={() => handleAddPokemonToSlot(state.pokemon)}>
                  <img src={pokeballImg} alt="Pokeball" />
                </button>
              )}

              {state.pokemon.origin === 'slot' && (
                <Button text='liberar pokemon' onClick={() => handleReleasePokemon(state.pokemon.id)} />
              )}
            </footer>
          </S.ModalContent>
        </Modal>

      )}
    </S.MapWrapper>
  );
}

export default MapPage;
