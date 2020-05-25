// @flow
import {
  POKEMONS_FAILURE,
  POKEMONS_REQUESTED,
  POKEMONS_SUCCESS,
} from '../actionTypes';
import type { PokemonsAction, State } from '../types';

type Action = PokemonsAction;

const initialState: State = {
  pokemons: [],
};

const pokemonsReducer = (
  state: State = initialState,
  action: Action,
): State => {
  switch (action.type) {
    case POKEMONS_REQUESTED: {
      return state;
    }
    case POKEMONS_SUCCESS: {
      const { pokemons } = action.payload;
      return {
        ...state,
        pokemons,
      };
    }
    case POKEMONS_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default pokemonsReducer;
