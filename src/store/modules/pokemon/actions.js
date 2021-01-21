import { ActionTypes } from './types';

export function fetchRandomPokemon() {
  return {
    type: ActionTypes.fetchRandomPokemon,
    payload: {}
  }
}
