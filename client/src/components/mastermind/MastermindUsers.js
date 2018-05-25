import React, {Component} from 'react';
import {List, Avatar} from 'antd';
import {searchUsers} from "../../services/AuthServices";

class MastermindUsers extends Component{

  state = {
    users: []
  };

  componentWillMount(){
    searchUsers()
      .then(users => this.setState({users}))
      .catch(e => console.log(e))
  }

  render(){
    return(
      <div>
        <List size="small" bordered dataSource={this.state.users} renderItem={user => (
          <List.Item actions={[<a>edit</a>, <a>delete</a>]}>
            <List.Item.Meta avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} title={user.name} description={user.email} />
          </List.Item>
        )}/>
      </div>
    );
  }
}

export default MastermindUsers;