import React, {Component} from 'react';
import {Card, Button} from 'antd';
import {logout} from "../../services/AuthServices";

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

  handleSubmit = (e) => {
    const {user} = this.state;
    e.preventDefault();
    logout()
      .then(r => {
        this.props.history.push('/');
          localStorage.removeItem('user');
          this.setState({user});
      })
      .catch(e => console.log(e));
  };

  render(){
    const {user} = this.state;
    return(
      <div>
        <Card title='Perfil' bordered={false} style={{ width: "100%" }}>
          <p>Welcome Master {user.name} </p>
          <Button onClick={this.handleSubmit} type="danger">Log Out</Button>
        </Card>
      </div>
    );
  }
}

export default MastermindInfo;