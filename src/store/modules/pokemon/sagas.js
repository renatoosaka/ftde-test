import { all, call, takeLatest, put } from 'redux-saga/effects';
import { ActionTypes } from './types';
import api from 'services/api'
import { fetchRandomPokemonSuccess } from './actions';

function* getPokemonRemoteData(action) {
  const { pokemonRandomID } = action.payload;

  try {
    const { data } = yield call(api.get, `pokemon/${pokemonRandomID}`);
    yield put(fetchRandomPokemonSuccess(data))
  } catch (error) {
    console.error(error);
  }
}

export default all([
  takeLatest(ActionTypes.fetchRandomPokemonRequest, getPokemonRemoteData)
]);
