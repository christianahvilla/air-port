import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Reservations from '../pages/Reservations';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/reservations" component={Reservations} />
        <Redirect from="*" to="/" component={Home} />
    </Switch>
);

export default Routes;
