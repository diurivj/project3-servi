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

  redirectlogin = (url) => {
    this.props.history.push(`/${url}`);
  };

  redirecthome = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div style={{position: 'fixed', width: '100%', zIndex: '9999'}}>
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme={"light"}>
        <Menu.Item key="home" onClick={this.redirecthome}>
          <Icon type="home"/>
        </Menu.Item>
        <Menu.Item key="restaurants" onClick={()=>this.redirectlogin('app/restaurants')}>
          <Icon type="shop"/> Restaurantes
        </Menu.Item>
        <Menu.Item key="howitworks" onClick={()=>this.redirectlogin('app/howitworks')}>
          <Icon type="smile-o"/>¿Como funciona?
        </Menu.Item>
        <Menu.Item key="login" style={{float:"right"}} onClick={()=>this.redirectlogin('login')} >
          <Icon type="user" />Iniciar Sesión
        </Menu.Item>
      </Menu>
      </div>
    );
  }
}

export default HomeNavbar;