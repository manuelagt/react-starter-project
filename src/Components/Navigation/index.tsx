import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Pokedex } from '../Pokedex';

export function Navigation() {
  return (
    <Switch>
      <Route path={"/pokedex"} component={Pokedex} />
      <Redirect to="/pokedex" />
    </Switch>
  );
}
