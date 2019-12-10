import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ListView } from '../ListView'
import {DetailedView} from "../DetailedView";

export function Navigation() {
    return (
        <Switch>
            <Route path={"/pokedex/:name"} component={DetailedView}/>
            <Route path={"/pokedex"} component={ListView}/>
            <Redirect to="/pokedex"/>
        </Switch>
    );
}
