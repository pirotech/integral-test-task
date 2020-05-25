// @flow
import { POKEMONS_REQUESTED } from '../actionTypes';
import type { PokemonsAction } from '../types';

const pokemonsActions = {
  loadPokemons: (limit: number = 20): PokemonsAction => ({
    type: POKEMONS_REQUESTED,
    payload: {
      limit,
    },
  }),
};

export default pokemonsActions;
