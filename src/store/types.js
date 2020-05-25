// @flow
export type Pokemon = {
  +name: string
};

export type State = {
  +pokemons: {
    +pokemons: Pokemon[]
  }
};

export type PokemonsAction = {
  +type: string,
  +payload: {
    +limit: number
  }
};
