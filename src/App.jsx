import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { history, store } from "./store";
import MainPage from "./components/mainPage/MainPage";
import "./shared/styles/app.scss";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Redirect to="/" />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
