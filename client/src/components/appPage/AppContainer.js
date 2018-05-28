import React, {Component} from 'react';
import image from '../../assets/Eggs_food_fish_bread_forks_asparagus_1920x1200.jpg';
import AppSearch from "./AppSearch";

class AppContainer extends Component{
  render(){
    return(
      <div style={{ backgroundImage: `url(${image})`, height: '50vh', width: '100%'}}>
        <AppSearch />
      </div>
    );
  }
}

export default AppContainer;