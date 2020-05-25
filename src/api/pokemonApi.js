// @flow
import { AxiosPromise } from 'axios';
import instance from './index';
import type { Pokemon } from '../store/types';

type PokemonsResponse = {
  data: {
    results: [Pokemon]
  }
};

type AbilityResponse = {
  is_hidden: boolean,
  slot: number,
  ability: {
    name: string
  }
};
type TypeResponse = {
  slot: number,
  type: {
    name: string
  }
};
type PokemonDetailsResponse = {
  data: {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    order: number,
    weight: number,
    abilities: AbilityResponse[],
    sprites: {
      back_female: string,
      back_shiny_female: string,
      back_default: string,
      front_female: string,
      front_shiny_female: string,
      back_shiny: string,
      front_default: string,
      front_shiny: string
    },
    types: TypeResponse[]
  }
};

const pokemonApi = {
  getPokemons: (limit: number = 20): AxiosPromise<PokemonsResponse> => instance.get('/pokemon/', {
    params: {
      limit,
    },
  }),
  getPokemonDetails: (name: string): AxiosPromise<PokemonDetailsResponse> => instance.get(`/pokemon/${name}/`),
  getAbility: (id: string): AxiosPromise<AbilityResponse> => instance.get(`/ability/${id}/`),
};

export default pokemonApi;
