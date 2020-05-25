// @flow
import { takeLatest, put, all } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import pokemonApi from '../api/pokemonApi';
import pokemonsActions from './actions/pokemonsActions';
import {
  POKEMONS_REQUESTED,
  DETAILS_REQUESTED,
} from './actionTypes';
import type { DetailsAction, Pokemon, PokemonsAction } from './types';

function* pokemonsRequested(action: PokemonsAction): Saga<void> {
  try {
    const { limit } = action.payload;
    const promise = pokemonApi.getPokemons(limit);
    const { data } = yield promise;
    const pokemons: Pokemon[] = data.results.map((item) => ({
      name: item.name,
    }));
    yield put(pokemonsActions.pokemonsSuccess(pokemons));
  } catch (e) {
    yield put(pokemonsActions.pokemonsFailure());
  }
}
function* pokemonsSaga(): Saga<void> {
  yield takeLatest(POKEMONS_REQUESTED, pokemonsRequested);
}

function* detailsRequested(action: DetailsAction): Saga<void> {
  try {
    const { name } = action.payload;
    const promise = pokemonApi.getPokemonDetails(name);
    const { data } = yield promise;
    const abilities = data.abilities.map((item) => ({
      ...item,
      // .../ability/66/
      ability: {
        ...item.ability,
        id: item.ability.url.split('/ability/')[1].replace('/', ''),
      },
    }));
    const pokemon: Pokemon = { ...data, abilities };
    yield put(pokemonsActions.detailsSuccess(pokemon));
  } catch (e) {
    yield put(pokemonsActions.detailsFailure());
  }
}
function* detailsSaga(): Saga<void> {
  yield takeLatest(DETAILS_REQUESTED, detailsRequested);
}

function* rootSaga(): Saga<void> {
  yield all([
    pokemonsSaga(),
    detailsSaga(),
  ]);
}

export default rootSaga;
