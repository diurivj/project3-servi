import React, {Component} from 'react';
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
        <ul>
          {this.state.users.map(user =>{
            return (
              <li>{user.name}</li>
            );
          })}
        </ul>
      </div>
    );
  }

}

export default MastermindUsers;