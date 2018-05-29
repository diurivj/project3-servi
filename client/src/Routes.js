import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeContainer from "./components/home/HomeContainer";
import LoginContainer from "./components/login/LoginContainer";
import SignupContainer from "./components/signup/SignupContainer";
import ProfileContainer from "./components/userProfile/ProfileContainer";
import MastermindDisplay from "./components/mastermind/MastermindDisplay";
import Restaurants from "./components/appPage/Restaurants";
import Howitworks from "./components/appPage/Howitworks";
import AppContainer from "./components/appPage/AppContainer";
import RestaurantMenu from "./components/appPage/RestaurantMenu";

export const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route path='/mastermind' component={MastermindDisplay} />
      <Route path='/login' component={LoginContainer} />
      <Route path='/signup' component={SignupContainer} />
      <Route path='/profile' component={ProfileContainer} />
      <Route exact path='/app' component={AppContainer} />
      <Route exact path='/app/restaurants' component={Restaurants} />
      <Route exact path='/app/howitworks' component={Howitworks} />
      <Route path='/app/menu/:menu' component={RestaurantMenu} />
    </Switch>
  );
};