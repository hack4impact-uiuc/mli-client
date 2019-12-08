import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import OverlayedPage from './containers/OverlayedPage';
import LabeledPage from './containers/LabeledPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.LABELED} component={LabeledPage} />
      <Route path={routes.OVERLAYED} component={OverlayedPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
