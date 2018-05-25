import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeContainer from "./components/home/HomeContainer";
import LoginContainer from "./components/login/LoginContainer";
import SignupContainer from "./components/signup/SignupContainer";
import ProfileContainer from "./components/userProfile/ProfileContainer";
import MastermindDisplay from "./components/mastermind/MastermindDisplay";

export const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route path='/mastermind' component={MastermindDisplay} />
      <Route path='/login' component={LoginContainer} />
      <Route path='/signup' component={SignupContainer} />
      <Route path='/profile' component={ProfileContainer} />
    </Switch>
  );
};