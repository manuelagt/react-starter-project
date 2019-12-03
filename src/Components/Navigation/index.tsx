import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Pokedex } from '../Pokedex';
import {PokeDetails} from "../PokeDetails";

export function Navigation() {
  return (
    <Switch>
      <Route path={"/pokedex/:name"} component={PokeDetails}/>
      <Route path={"/pokedex"} component={Pokedex} />
      <Redirect to="/pokedex" />
    </Switch>
  );
}
