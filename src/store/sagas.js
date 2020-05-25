// @flow
import { takeEvery, put } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import pokemonApi from '../api/pokemonApi';
import {
  POKEMONS_REQUESTED,
  POKEMONS_SUCCESS,
  POKEMONS_FAILURE,
} from './actionTypes';
import type { Pokemon, PokemonsAction } from './types';

function* pokemonsRequested(action: PokemonsAction): Saga<void> {
  try {
    const { limit } = action.payload;
    const promise = pokemonApi.getPokemons(limit);
    const { data } = yield promise;
    const pokemons: Pokemon[] = data.results.map((item) => ({
      name: item.name,
    }));
    yield put({
      type: POKEMONS_SUCCESS,
      payload: {
        pokemons,
      },
    });
  } catch (e) {
    yield put({
      type: POKEMONS_FAILURE,
    });
  }
}

function* pokemonsSaga(): Saga<void> {
  yield takeEvery(POKEMONS_REQUESTED, pokemonsRequested);
}

export default pokemonsSaga;
