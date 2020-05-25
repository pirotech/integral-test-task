// @flow
import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import type {Dispatch} from "redux";
import Header from "../../shared/components/header/Header";
import type {RouterHistory} from "react-router";
import pokemonsActions from "../../store/actions/pokemonsActions";
import pokemonsSelector from "../../store/selectors/pokemonsSelector";
import type {Pokemon} from "../../store/types";
import './DetailsPage.scss';

type StoreProps = {
  pokemons: Pokemon[],
  loadDetails: (name: string) => void
};
type Props = RouterHistory & StoreProps;
type State = {
  pokemon: Pokemon | null
};

class DetailsPage extends Component<Props, State> {
  state: State = {
    pokemon: null
  };

  componentDidMount(): void {
    const {match, pokemons, loadDetails} = this.props;
    const {name} = match.params;
    const found = pokemons.find(item => item.name === name);
    if (!found || !found.id) {
      loadDetails(name);
    } else {
      this.setState({
        pokemon: found
      })
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { match, pokemons } = this.props;
    const {name} = match.params;
    const found = pokemons.find(item => item.name === name);
    if (!this.state.pokemon && found) {
      this.setState({
        pokemon: found
      });
    }
  }

  toAbility = (id) => {
    const { history } = this.props;
    history.push(`/ability/${id}`);
  };

  render(): React.ReactElement<any> {
    const { match } = this.props;
    const { pokemon } = this.state;

    return (
      <div className="details-page">
        <Header />
        <h2 className="details-page__title">{match.params.name}</h2>
        {pokemon && (
          <div className="details-page-info">
            <p><strong>Id: </strong>{pokemon.id}</p>
            <p><strong>Order: </strong>{pokemon.order}</p>
            <p><strong>Base experience: </strong>{pokemon.base_experience}</p>
            <p><strong>Weight: </strong>{pokemon.weight} <strong>Height: </strong>{pokemon.height}</p>
            <p><strong>Abilities:</strong></p>
            <ul>
              {pokemon.abilities.map(item => (
                <li className="details-page__ability" key={item.ability.name}>
                  <a onClick={() => this.toAbility(item.ability.id)}>{item.ability.name}</a>
                </li>
              ))}
            </ul>
            <p><strong>Type: </strong></p>
            <ul>
              {pokemon.types.map(item => (
                <li key={item.type.name}>{item.type.name}</li>
              ))}
            </ul>
            <ul className="details-page-sprites">
              {pokemon.sprites.back_default && (
                <li><img src={pokemon.sprites.back_default} alt="back default"/></li>
              )}
              {pokemon.sprites.back_female && (
                <li><img src={pokemon.sprites.back_female} alt="back female"/></li>
              )}
              {pokemon.sprites.back_shiny && (
                <li><img src={pokemon.sprites.back_shiny} alt="back shiny"/></li>
              )}
              {pokemon.sprites.back_shiny_female && (
                <li><img src={pokemon.sprites.back_shiny_female} alt="back shiny female"/></li>
              )}
              {pokemon.sprites.front_default && (
                <li><img src={pokemon.sprites.front_default} alt="front default"/></li>
              )}
              {pokemon.sprites.front_female && (
                <li><img src={pokemon.sprites.front_female} alt="front female"/></li>
              )}
              {pokemon.sprites.front_shiny && (
                <li><img src={pokemon.sprites.front_shiny} alt="front shiny"/></li>
              )}
              {pokemon.sprites.front_shiny_female && (
                <li><img src={pokemon.sprites.front_shiny_female} alt="front shiny female"/></li>
              )}
            </ul>
          </div>
        )}
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
)(DetailsPage);
