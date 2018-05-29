import React, {Component} from 'react';
import {getMenu} from "../../services/AdminServices";

class RestaurantMenu extends Component{

  state = {
    restaurant: {}
  };

  componentWillMount(){
    getMenu(this.props.match.params.menu)
      .then(restaurant => {
        this.setState({restaurant});
      })
      .catch(e => console.log(e))
  }

  render(){
    console.log('el state', this.state.restaurant);
    return(
      <div>

      </div>
    );
  }
}

export default RestaurantMenu;