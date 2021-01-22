import { ActionTypes } from './types';

export function fetchRandomPokemonRequest() {
  console.log('action request')
  const pokemonRandomID = Math.floor(Math.random() * 807) + 1

  return {
    type: ActionTypes.fetchRandomPokemonRequest,
    payload: {
      pokemonRandomID
    }
  }
}

export function fetchRandomPokemonSuccess(pokemonData) {
  return {
    type: ActionTypes.fetchRandomPokemonSuccess,
    payload: {
      pokemonData
    }
  }
}

export function fetchRandomPokemonFailure() {
  return {
    type: ActionTypes.fetchRandomPokemonFailure,
    payload: {}
  }
}

export function cancelRandomPokemon() {
  return {
    type: ActionTypes.cancelRandomPokemon,
    payload: {}
  }
}
