import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeContainer from "./components/home/HomeContainer";
import LoginContainer from "./components/login/LoginContainer";
import SignupContainer from "./components/signup/SignupContainer";

export const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route path='/login' component={LoginContainer} />
      <Route path='/signup' component={SignupContainer} />
    </Switch>
  );
};