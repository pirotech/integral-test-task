// @flow
import type { State } from '../types';

const pokemonsSelector = {
  getPokemons: (state: State) => state.pokemons.pokemons,
};

export default pokemonsSelector;
