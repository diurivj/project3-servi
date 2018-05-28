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
    console.log(user);
    this.setState({user});
  }

  render(){
    const {user} = this.state;
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
        </div>
      </div>
    );
  }
}

export default UserInfo;
