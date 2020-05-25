// @flow

type Ability = {
  is_hidden: boolean,
  slot: number,
  ability: {
    name: string
  }
};
type Type = {
  slot: number,
  type: {
    name: string
  }
};
export type Pokemon = {
  +id?: number,
  +name: string,
  +base_experience?: number,
  +height?: number,
  +order?: number,
  +weight?: number,
  +abilities?: Ability[],
  +sprites?: {
    +back_female: string,
    +back_shiny_female: string,
    +back_default: string,
    +front_female: string,
    +front_shiny_female: string,
    +back_shiny: string,
    +front_default: string,
    +front_shiny: string
  },
  +types?: Type[]
};

export type State = {
  +pokemons: {
    +pokemons: Pokemon[]
  }
};

type PokemonsRequestedAction = {
  +type: string,
  +payload: {
    +limit: number
  }
};
type PokemonsSuccessAction = {
  +type: string,
  +payload: {
    +pokemons: Pokemon[]
  }
};
type PokemonsFailureAction = {
  +type: string
};
export type PokemonsAction =
  PokemonsRequestedAction
  | PokemonsSuccessAction
  | PokemonsFailureAction;

type DetailsRequestedAction = {
  +type: string,
  +payload: {
    +name: string
  }
};
type DetailsSuccessAction = {
  +type: string,
  +payload: {
    +pokemon: Pokemon
  }
};
type DetailsFailureAction = {
  +type: string
};
export type DetailsAction =
  DetailsRequestedAction
  | DetailsSuccessAction
  | DetailsFailureAction;
