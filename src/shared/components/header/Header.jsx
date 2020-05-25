// @flow
import React, { useCallback } from "react";
import { withRouter } from "react-router";
import type { RouterHistory } from "react-router";
import "./Header.scss";

type Props = {
  history: RouterHistory
};

const Header = (props: Props) => {
  const toMainPage = useCallback(() => props.history.push("/"), []);

  return (
    <header className="header">
      <h1 className="header__title" onClick={toMainPage}>
        Pokemon client
      </h1>
    </header>
  );
};

export default withRouter(Header);
