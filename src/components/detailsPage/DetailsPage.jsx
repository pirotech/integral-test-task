import React, {Component} from 'react';
import Header from "../../shared/components/header/Header";
import type {RouterHistory} from "react-router";
import './DetailsPage.scss';

type Props = {
  ...RouterHistory
};
type State = {};

class DetailsPage extends Component<Props, State> {
  componentDidMount(): void {
  }

  render(): React.ReactElement<any> {
    const { match } = this.props;

    return (
      <div className="details-page">
        <Header />
        <h2 className="details-page__title">{match.params.name}</h2>
      </div>
    );
  }
}

export default DetailsPage;
