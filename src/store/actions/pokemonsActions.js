// @flow
import {
  POKEMONS_REQUESTED,
  POKEMONS_SUCCESS,
  POKEMONS_FAILURE,
  DETAILS_REQUESTED,
  DETAILS_SUCCESS,
  DETAILS_FAILURE,
} from '../actionTypes';
import type { PokemonsAction, DetailsAction, Pokemon } from '../types';

const pokemonsActions = {
  loadPokemons: (limit: number = 20): PokemonsAction => ({
    type: POKEMONS_REQUESTED,
    payload: {
      limit,
    },
  }),
  pokemonsSuccess: (pokemons: Pokemon[]): PokemonsAction => ({
    type: POKEMONS_SUCCESS,
    payload: {
      pokemons,
    },
  }),
  pokemonsFailure: (): PokemonsAction => ({
    type: POKEMONS_FAILURE,
  }),

  loadDetails: (name: string): DetailsAction => ({
    type: DETAILS_REQUESTED,
    payload: {
      name,
    },
  }),
  detailsSuccess: (pokemon: Pokemon): DetailsAction => ({
    type: DETAILS_SUCCESS,
    payload: {
      pokemon,
    },
  }),
  detailsFailure: (): DetailsAction => ({
    type: DETAILS_FAILURE,
  }),
};

export default pokemonsActions;
