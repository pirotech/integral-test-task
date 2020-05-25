// @flow
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import type { Dispatch } from "redux";
import pokemonsActions from "../../store/actions/pokemonsActions";
import pokemonsSelector from "../../store/selectors/pokemonsSelector";
import type { Pokemon } from "../../store/types";
import "./MainPage.scss";

type Props = {
  pokemons: Pokemon[],
  loadPokemons: (limit: number) => void
};
type State = {};

class MainPage extends React.Component<Props, State> {
  componentDidMount() {
    const { loadPokemons } = this.props;
    loadPokemons();
  }

  render() {
    const { pokemons } = this.props;

    return (
      <div className="main-page">
        <ul className="main-page-list">
          {pokemons.map(item => (
            <li className="main-page-list__item" key={item.name}>
              {item.name}
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
