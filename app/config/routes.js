var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
import { hashHistory } from 'react-router'

module.exports = (

  <Route path="/" component={Main}>
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);
