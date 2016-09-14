import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import AppContainer from '../containers/AppContainer';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer} />
  </Router>
)
export default router;
