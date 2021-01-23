import produce from 'immer';
import { ActionTypes } from './types';

import pokemonStats from 'utils/pokemonStats';

const INITIAL_STATE = {
  maxItemsInSlot: 6,
  slots: [],
  isLoading: false,
  pokemon: null,
  isEditing: false,
  isCreating: false,
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
        const statsAvailable = Object.keys(pokemonStats);

        draft.pokemon = {
          origin: 'remote',
          archived: false,
          id: pokemonData.id,
          avatar: pokemonData.sprites.other.dream_world.front_default || pokemonData.sprites.other["official-artwork"].front_default,
          name: pokemonData.name,
          hp: hpStatIndex > -1 ? pokemonData.stats[hpStatIndex].base_stat : 0,
          height:  pokemonData.height/10,
          weight: pokemonData.weight/10,
          types: pokemonData.types.map(item => item.type.name),
          skills: pokemonData.abilities.map(item => item.ability.name),
          stats: pokemonData.stats.filter(item => statsAvailable.includes(item.stat.name)).map(item => ({
            id: item.stat.name,
            value: item.base_stat
          }))
        }
        draft.isLoading = false;
        break;
      }

      case ActionTypes.cancelRandomPokemon:
      case ActionTypes.fetchRandomPokemonFailure: {
        draft.isLoading = false;
        draft.isCreating = false;
        draft.isEditing = false;
        draft.pokemon = null;
        break;
      }

      case ActionTypes.addPokemonToSlot: {
        const { pokemon } = action.payload;

        if (draft.slots.length < draft.maxItemsInSlot) {
          draft.slots.push({
            ...pokemon,
            archived: true,
          });
          draft.pokemon = null;
          draft.isCreating = false;
        }

        break;
      }

      case ActionTypes.showPokemonFromSlot: {
        const { index } = action.payload;

        draft.pokemon = draft.slots[index];
        break;
      }

      case ActionTypes.releasePokemonFromSlot: {
        const { pokemonID } = action.payload;

        draft.slots = draft.slots.filter(pokemon => pokemon.id !== pokemonID);
        draft.pokemon = null;
        break;
      }

      case ActionTypes.editPokemonData: {
        draft.isEditing = true;
        break;
      }

      case ActionTypes.cancelEditPokemonData: {
        draft.isEditing = false;
        break;
      }

      case ActionTypes.updatePokemonData: {
        const { pokemon } = action.payload;

        draft.slots = draft.slots.map(item => item.id === pokemon.id ? pokemon : item);
        draft.pokemon = pokemon;
        draft.isEditing = false;

        break;
      }

      case ActionTypes.createPokemon: {
        draft.isCreating = true;
        break;
      }
      case ActionTypes.cancelCreatePokemon: {
        draft.isCreating = false;
        break;
      }
      default:
        return draft;
    }
  })
}

export default pokemon;
