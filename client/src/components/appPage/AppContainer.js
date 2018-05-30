import React, {Component} from 'react';
import image from '../../assets/Eggs_food_fish_bread_forks_asparagus_1920x1200.jpg';
import AppSearch from "./AppSearch";

class AppContainer extends Component{

  componentWillMount() {
    if (!localStorage.getItem('user'))
      return this.props.history.push('/login');
  }

  render(){
    return(
      <div style={{ backgroundImage: `url(${image})`, height: '50vh', width: '100%'}}>
        <AppSearch history={this.props.history} />
      </div>
    );
  }
}

export default AppContainer;