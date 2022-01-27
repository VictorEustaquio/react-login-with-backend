import React from 'react';

import { Router, Switch, Route, Redirect } from 'react-router';

import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/home';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';

import { history } from '../history'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/">
                <Redirect to="/login" />
            </Route>
            <Route exact path="/login" render={Login}  />
            <Route exact path="/register" render={Register}  />
            <PrivateRoute exact path="/home" render={Home}  />
            <Route component={NotFound} />
        </Switch>
    </Router >
)

export default Routes;
