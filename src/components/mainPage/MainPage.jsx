// @flow
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import type { Dispatch } from "redux";
import Header from "../../shared/components/header/Header";
import pokemonsActions from "../../store/actions/pokemonsActions";
import pokemonsSelector from "../../store/selectors/pokemonsSelector";
import type { Pokemon } from "../../store/types";
import type {RouterHistory} from "react-router";
import _ from 'lodash';
import "./MainPage.scss";

type StoreProps = {
  pokemons: Pokemon[],
  loadPokemons: (limit: number) => void
};
type Props = RouterHistory & StoreProps;
type State = {
  searchString: string,
  searched: Pokemon[]
};

class MainPage extends React.Component<Props, State> {
  state: State = {
    searchString: '',
    searched: []
  };

  componentDidMount(): void {
    const { loadPokemons } = this.props;
    loadPokemons();
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.props.pokemons.length > 0 && this.state.searched.length === 0) {
      this.setState({
        searched: this.props.pokemons
      });
    }
  }

  showDetails = (item: Pokemon): void => {
    const { history } = this.props;
    history.push(`/${item.name}`);
  };

  search = () => {
    const { pokemons } = this.props;
    const { searchString } = this.state;
    const searched = searchString
      ? pokemons.filter(item => item.name.includes(searchString))
      : pokemons;
    this.setState({
      searched
    });
  };
  debouncedSearch = _.debounce(this.search, 500);

  onSearchStringChange = (e: SyntheticInputEvent<T>) => {
    this.setState({
      searchString: e.target.value
    }, this.debouncedSearch);
  };

  render() {
    const { searchString, searched } = this.state;

    return (
      <div className="main-page">
        <Header />

        <input
          className="main-page__search"
          type="text"
          value={searchString}
          placeholder="Search"
          onChange={this.onSearchStringChange}
        />

        <ul className="main-page-list">
          {searched.map(item => (
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

const mapStateToProps = (state: State): StoreProps => ({
  pokemons: pokemonsSelector.getPokemons(state)
});
const mapDispatchToProps = (dispatch: Dispatch): StoreProps =>
  bindActionCreators(pokemonsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
