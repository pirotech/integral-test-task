import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import pokemonsReducer from './pokemonsReducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  pokemons: pokemonsReducer,
});

export default createRootReducer;
