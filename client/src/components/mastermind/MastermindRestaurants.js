import React, {Component} from 'react';
import {List, Avatar} from 'antd';
import {getRestaurants} from "../../services/AdminServices";

class MastermindRestaurants extends Component{

  state = {
    restaurants: []
  };

  componentWillMount(){
    getRestaurants()
      .then(restaurants => this.setState({restaurants}))
      .catch(e => console.log(e))
  }

  render(){
    return(
      <div>
        <List size="small" bordered dataSource={this.state.restaurants} renderItem={restaurant => (
          <List.Item actions={[<a>edit</a>, <a>delete</a>]}>
            <List.Item.Meta avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={restaurant.name}
            description={restaurant.desc}
            />
          </List.Item>
        )}/>
      </div>
    );
  }
}

export default MastermindRestaurants;