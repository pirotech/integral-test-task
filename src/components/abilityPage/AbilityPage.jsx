// @flow
import React, {Component} from 'react';
import type {RouterHistory} from "react-router";
import pokemonApi from "../../api/pokemonApi";
import Header from "../../shared/components/header/Header";
import './AbilityPage.scss';

type Effect = {
  effect: string
};
type Ability = {
  id: number,
  name: string,
  effect_entries: Effect[]
};

type Props = {
  ...RouterHistory
};
type State = {
  ability: Ability | null
};

class AbilityPage extends Component<Props, State> {
  state = {
    ability: null
  };

  componentDidMount() {
    const {match} = this.props;
    pokemonApi.getAbility(match.params.id).then(response => {
      this.setState({
        ability: response.data
      });
    }).catch(error => {
      console.error(error);
    });
  }

  toBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render(): React.ReactElement<any> {
    const { ability } = this.state;

    return (
      <div className="ability-page">
        <Header />
        {ability && (
          <div className="ability-page-info">
            <button className="ability-page__back" onClick={this.toBack}>Back</button>
            <p><strong>Id: </strong>{ability.id}</p>
            <p><strong>Name: </strong>{ability.name}</p>
            <p><strong>Effect entries: </strong></p>
            <ul>
              {ability.effect_entries.map(item => (
                <li key={item.effect}>{item.effect}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default AbilityPage;
