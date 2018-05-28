import React, {Component} from 'react';
import LoginForm from "./LoginForm";

class LoginContainer extends Component{

  componentWillMount() {
    if (localStorage.getItem('user'))
      return this.props.history.push('/profile');
  }

  render(){
    return(
      <div>
        <LoginForm history={this.props.history}/>
      </div>
    );
  }
}

export default LoginContainer;