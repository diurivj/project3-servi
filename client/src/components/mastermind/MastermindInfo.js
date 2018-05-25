import React, {Component} from 'react';
import {Card} from 'antd';

class MastermindInfo extends Component{

  state = {
    user:{}
  };

  componentWillMount(){
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    console.log(user);
    this.setState({user});
  }

  render(){
    const {user} = this.state;
    return(
      <div>
        <Card title='Perfil' bordered={false} style={{ width: "100%" }}>
          <p>Welcome Master {user.name} </p>
        </Card>
      </div>
    );
  }
}

export default MastermindInfo;