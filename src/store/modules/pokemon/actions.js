import { ActionTypes } from './types';

export function fetchRandomPokemonRequest() {
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

export function addPokemonToSlot(pokemon) {
  return {
    type: ActionTypes.addPokemonToSlot,
    payload: {
      pokemon
    }
  }
}

export function showPokemonFromSlot(index) {
  return {
    type: ActionTypes.showPokemonFromSlot,
    payload: {
      index
    }
  }
}

export function releasePokemonFromSlot(pokemonID) {
  return {
    type: ActionTypes.releasePokemonFromSlot,
    payload: {
      pokemonID
    }
  }
}

export function editPokemonData() {
  return {
    type: ActionTypes.editPokemonData,
    payload: {}
  }
}

export function cancelEditPokemonData() {
  return {
    type: ActionTypes.cancelEditPokemonData,
    payload: {}
  }
}

export function updatePokemonData(pokemon) {
  return {
    type: ActionTypes.updatePokemonData,
    payload: {
      pokemon
    }
  }
}

export function createPokemon() {
  return {
    type: ActionTypes.createPokemon,
    payload: {}
  }
}

export function cancelCreatePokemon() {
  return {
    type: ActionTypes.cancelCreatePokemon,
    payload: {}
  }
}
