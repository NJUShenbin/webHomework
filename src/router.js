import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import MainLayout from './routes/MainLayout'
import HomePage from './routes/HomePage'
import CompetitionPage from './routes/CompetitionPage'
import CompetitionList from './routes/CompetitionList'

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={MainLayout} >
        <IndexRoute component={HomePage}/>
        <Route path="/competition" component={CompetitionPage}>
          <IndexRoute component={CompetitionList}/>
        </Route>
      </Route>
    </Router>
  );
};
