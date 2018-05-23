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
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme={"dark"}>
        <Menu.Item key="home">
          <Icon type="home"/>
        </Menu.Item>
        <Menu.Item key="restaurants">
          <Icon type="shop"/> Restaurantes
        </Menu.Item>
        <Menu.Item key="howitworks">
          <Icon type="setting"/>¿Como funciona?
        </Menu.Item>
      </Menu>
    );
  }
}

export default HomeNavbar;