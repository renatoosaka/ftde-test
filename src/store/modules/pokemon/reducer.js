import produce from 'immer';
import { ActionTypes } from './types';

const INITIAL_STATE = {
  maxItemsInSlot: 6,
  slots: [],
  ashState: 0,
  isLoading: false,
  pokemon: null,
}

const pokemon = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.fetchRandomPokemonRequest: {
        draft.pokemon = null;
        draft.isLoading = true;
        break;
      }
      case ActionTypes.fetchRandomPokemonSuccess: {
        const { pokemonData } = action.payload;
        const hpStatIndex = pokemonData.stats.findIndex(item => item.stat.name === 'hp');

        draft.pokemon = {
          avatar: pokemonData.sprites.other.dream_world.front_default || pokemonData.sprites.other["official-artwork"].front_default,
          name: pokemonData.name,
          hp: hpStatIndex > -1 ? pokemonData.stats[hpStatIndex].base_stat : 0,
          height:  pokemonData.height,
          weight: pokemonData.weight,
          types: pokemonData.types.map(item => item.type.name),
          skills: pokemonData.abilities.map(item => item.ability.name)
        }
        draft.isLoading = false;
        break;
      }

      case ActionTypes.cancelRandomPokemon:
      case ActionTypes.fetchRandomPokemonFailure: {
        draft.isLoading = false;
        draft.pokemon = null;
        break;
      }

      default:
        return draft;
    }
  })
}

export default pokemon;
