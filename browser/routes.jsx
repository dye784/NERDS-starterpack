import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={App} />
      <Route path="*" component={App} />
    </Route>
  </Router>
);

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
