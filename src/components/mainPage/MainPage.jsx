// @flow
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import type { Dispatch } from "redux";
import pokemonApi from "../../api/pokemonApi";
import Header from "../../shared/components/header/Header";
import pokemonsActions from "../../store/actions/pokemonsActions";
import pokemonsSelector from "../../store/selectors/pokemonsSelector";
import type { Pokemon } from "../../store/types";
import type {RouterHistory} from "react-router";
import "./MainPage.scss";

type Props = {
  ...RouterHistory,
  pokemons: Pokemon[],
  loadPokemons: (limit: number) => void
};
type State = {};

class MainPage extends React.Component<Props, State> {
  componentDidMount(): void {
    const { loadPokemons } = this.props;
    loadPokemons();
  }

  showDetails = (item: Pokemon): void => {
    const { history } = this.props;
    history.push(`/${item.name}`);
  };

  render() {
    const { pokemons } = this.props;

    return (
      <div className="main-page">
        <Header />
        <ul className="main-page-list">
          {pokemons.map(item => (
            <li className="main-page-card" key={item.name} onClick={() => this.showDetails(item)}>
              <img className="card__image" src="https://via.placeholder.com/150/e6e6e6" alt="pokemon placeholder"/>
              <h3 className="card__title">{item.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: State): StoreProps => {
  return {
    pokemons: pokemonsSelector.getPokemons(state)
  };
};
const mapDispatchToProps = (dispatch: Dispatch): StoreProps =>
  bindActionCreators(pokemonsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
