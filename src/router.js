import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import MainLayout from './routes/MainLayout'
import HomePage from './routes/HomePage'
import CompetitionPage from './routes/CompetitionPage'

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={MainLayout} >
        <IndexRoute component={HomePage}/>
        <Route path="/competition" components={CompetitionPage}/>
      </Route>
    </Router>
  );
};
