// @flow
import { AxiosPromise } from 'axios';
import instance from './index';
import type { Pokemon } from '../store/types';

type PokemonsResponse = {
  data: {
    results: [Pokemon]
  }
};

const pokemonApi = {
  getPokemons: (limit: number = 20): AxiosPromise<PokemonsResponse> => instance.get('/pokemon/', {
    params: {
      limit,
    },
  }),
};

export default pokemonApi;
