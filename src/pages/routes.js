import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import RoomCreate from './RoomCreate';
import Game from './Game';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/game/:id' component={Game} />

        <Route path='/room/create' component={RoomCreate} />

        <Route path='/' component={Welcome} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
