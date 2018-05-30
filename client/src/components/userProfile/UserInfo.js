import React, {Component} from 'react';
import {Card, Button} from 'antd';
import {Link} from 'react-router-dom';

class UserInfo extends Component{

  state = {
    user:{}
  };

  componentWillMount(){
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    this.setState({user});
  }

  logout = () => {
    const {user} = this.state;
    localStorage.removeItem('user');
    this.setState({user});
  };

  render(){
    const {user} = this.state;
    console.log(user);
    return(
      <div style={{ padding: '30px' }}>
        <Card title='Perfil' bordered={false} style={{ width: "100%" }}>
          <p>{user.name ? user.name : user.displayName} {user.lastname}</p>
        </Card>
        <br/>
        <Card title='Reservaciones Próximas' bordered={false} style={{ width: "100%" }}>
          <p>Ninguna</p>
        </Card>
        <br/>
        <Card title='Reservaciones Anteriores' bordered={false} style={{ width: "100%" }}>
          <p>Ninguna</p>
        </Card>
        <div>
          <Link to='/app'> <Button> Reservar </Button> </Link>
          <Link to='/'> <Button onClick={this.logout} > Logout </Button> </Link>
        </div>
      </div>
    );
  }
}

export default UserInfo;
