// @flow
import {
  POKEMONS_REQUESTED,
  POKEMONS_SUCCESS,
  POKEMONS_FAILURE,
  DETAILS_REQUESTED,
  DETAILS_SUCCESS,
  DETAILS_FAILURE,
} from '../actionTypes';
import type { PokemonsAction, DetailsAction, State } from '../types';

type Action = PokemonsAction | DetailsAction;

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
    case DETAILS_REQUESTED: {
      return state;
    }
    case DETAILS_SUCCESS: {
      const { pokemon } = action.payload;
      const found = state.pokemons.some((item) => item.name === pokemon.name);
      let prepared;
      if (found) {
        prepared = state.pokemons.map((item) => (item.name === pokemon.name ? pokemon : item));
      } else {
        prepared = [...state.pokemons, pokemon];
      }
      return {
        ...state,
        pokemons: prepared,
      };
    }
    case DETAILS_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default pokemonsReducer;
