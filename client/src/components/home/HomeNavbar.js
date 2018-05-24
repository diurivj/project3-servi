import React, {Component} from 'react';
import { Menu, Icon } from 'antd';

class HomeNavbar extends Component {
  state = {
    current: 'home'
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div style={{position: 'fixed', width: '100%', zIndex: '9999'}}>
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme={"light"}>
        <Menu.Item key="home">
          <Icon type="home"/>
        </Menu.Item>
        <Menu.Item key="restaurants">
          <Icon type="shop"/> Restaurantes
        </Menu.Item>
        <Menu.Item key="howitworks">
          <Icon type="smile-o"/>¿Como funciona?
        </Menu.Item>
        <Menu.Item key="login" style={{float:"right"}}>
          <Icon type="user"/>Iniciar Sesión
        </Menu.Item>
      </Menu>
      </div>
    );
  }
}

export default HomeNavbar;