import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link, Route} from 'react-router-dom';
import MastermindInfo from "./MastermindInfo";
import MastermindUsers from "./MastermindUsers";

class MastermindDisplay extends Component{

  render(){
    return (
      <div style={{display: "flex"}}>
      <div style={{width: 256}}>
        <Menu style={{height: "100vh"}} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="light" inlineCollapsed={true}>
          <Menu.Item key="1">
            <Link to="/mastermind/home">
              <Icon type="qq"/>
              <span>Admin</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/mastermind/users">
              <Icon type="user"/>
              <span>Users</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="shop"/>
            <span>Restaurants</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="book"/>
            <span>Reservations</span>
          </Menu.Item>
        </Menu>
      </div>
        <div>
          <Route path="/mastermind/home" component={MastermindInfo} />
          <Route path="/mastermind/users" component={MastermindUsers} />
        </div>
      </div>
    );
  }
}

export default MastermindDisplay;